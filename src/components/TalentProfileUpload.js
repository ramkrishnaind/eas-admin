import { useState } from "react";
import readXlsxFile from "read-excel-file";
import axios from "axios";
import { Table, Input, Container, Row, Col } from "reactstrap";
export default function TalentProfileUpload(props) {
  // const { isheader, isSrNo, answerColumnIndex, headerProps } = props;
  const [csvFile, setCsvFile] = useState();
  const [headers, setHeaders] = useState([]);

  const [csvArray, setCsvArray] = useState([]);
  const [stepsObject, setStepsObject] = useState({});
  // [{name: "", age: 0, rank: ""},{name: "", age: 0, rank: ""}]
  const main = async () => {
    const rows = await readXlsxFile(csvFile);
    setHeaders(rows[0]);
    processCSV(rows[0], rows.slice(1));
  };

  const processCSV = (hdrs, rows) => {
    // let uniqJobs = [...moduleUniqueJobs];
    const newArray = rows.map((row) => {
      let module;
      const eachObject = hdrs.reduce((obj = {}, header, i) => {
        if (i <= 3) {
          let value = row[i];
          if (i === 2) {
            module = value;
          }
          if (header.trim() === "Job roles") {
            // let moduleObj = uniqJobs.find((item) => item.module === module);
            value = value || "";
            value = value.split(",");
            value = value.map((v) => v.replace("\t", "").trim());
            // const res = [];
            // value.forEach((item) => {
            //   if (!res.includes(item)) res.push(item);
            // });
            // value = res;
          }
          if (header === "Product") {
            value = value.split(",");
            value = value.map((v) => v.trim());
          }
          obj[header] = value;
        }
        return obj;
      }, {});
      return eachObject;
    });

    setCsvArray(newArray);
    const objFinal = {};
    rows.forEach((row) => {
      hdrs.forEach((header, i) => {
        // debugger;
        if (i <= 3) {
          if (i === 0) {
            if (!objFinal[row[0]]) objFinal[row[0]] = {};
          }
          if (i === 1) {
            if (
              Object.keys(objFinal[row[0]]).length === 0 ||
              (objFinal[row[0]].keys && !objFinal[row[0]][row[1]])
            ) {
              objFinal[row[0]][row[1]] = {};
            }
          }
          if (header === "Product") {
            let value = row[i];
            value = value.split(",");
            value = value.map((v) => v.trim());
            debugger;
            if (objFinal[row[0]][row[1]])
              objFinal[row[0]][row[1]].Product = value;
          }
          if (header.trim() === "Job roles") {
            let value = row[i] || "";
            value = value.split(",");
            value = value.map((v) => v.trim());
            if (objFinal[row[0]][row[1]]) objFinal[row[0]][row[1]].Jobs = value;
          }
        }
      });
    });
    setStepsObject(objFinal);
  };
  console.log("csvArray", csvArray);
  // console.log("moduleUniqueJobs", moduleUniqueJobs);
  console.log("stepsObject", stepsObject);
  // console.log("sendArray", sendArray);
  const submit = async () => {
    const formData = new FormData();
    formData.append("talentProfileFile", csvFile);
    formData.append("steps", JSON.stringify(stepsObject));
    try {
      const resp = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/talentProfile/setTalentProfileSteps`,
        formData
      );
      console.log("file upload", resp.data.talentProfileUpload);
    } catch {}
  };
  const upload = () => {
    main();
  };
  return (
    <>
      <form id="csv-form" className="col-xs-9">
        <Container className="mt-5">
          <Row className="justify-content-center mb-3">
            <Col sm={10}>
              <Input
                name="file"
                type="file"
                accept=".xlsx"
                id="csvFile"
                onClick={(e) => {
                  setCsvArray([]);
                }}
                onChange={(e) => {
                  setCsvFile(e.target.files[0]);
                }}
              />
              {/* <input
        type="file"
      ></input> */}
              {/* <br /> */}
            </Col>
            <Col sm={"auto"} className="p-0">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (csvFile) upload();
                }}
                style={{ padding: "5px" }}
              >
                Upload Excel
              </button>
            </Col>
          </Row>
          {csvArray.length > 0 && (
            <Row className="justify-content-center mb-3">
              <Col xs={1}>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    submit();
                  }}
                  style={{ padding: "5px" }}
                >
                  Submit
                </button>
              </Col>
            </Row>
          )}
        </Container>
      </form>
      <br />
      <br />
      {csvArray.length > 0 ? (
        <>
          <Table bordered striped hover>
            <thead>
              <tr className="question-header">
                {headers.map((h, index) => {
                  return <th key={index}>{h}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {csvArray.map((item, i) => {
                return (
                  <tr key={i}>
                    {headers.map((h, index) => {
                      // if (index === 0)
                      //   return (
                      //     <td className="question-first-col" key={index}>
                      //       {item[headers[index]]}
                      //     </td>
                      //   );
                      return index <= 3 ? (
                        <td>{item[headers[index]]}</td>
                      ) : null;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </>
      ) : null}
    </>
  );
}
