// In the modified code, I have used a single state variable data to store the fetched data for all the students. 
//The onStudentsPick function uses Promise.all to fetch the student, school, and legal guardian data for each student in parallel. 
//Once all the data is fetched, it is combined with the existing data using the spread operator and updated using the functional 
//form of setData. This ensures that unnecessary re-renders are avoided, and the state is updated only when all the data 
//for onStudentsPick is loaded.

// The StudentsTable component now receives the data prop, which contains an array of objects with studentData, schoolData, 
//and legalguardianData for each student. You can modify the StudentsTable component accordingly to access and display the required information.

import StudentsPicker from "../components/StudentsPicker";
import StudentsTable from "../components/StudentsTable";
import {
  fetchStudentData,
  fetchSchoolData,
  fetchLegalguardianData,
} from "../utils";
import { useState } from "react";

const StudentsDataComponent = () => {
  const [data, setData] = useState([]);

  const onStudentsPick = async (studentIds) => {
    const newData = await Promise.all(
      studentIds.map(async (studentId) => {
        const studentData = await fetchStudentData(studentId);
        const { schoolId, legalguardianId } = studentData;
        const [schoolData, legalguardianData] = await Promise.all([
          fetchSchoolData(schoolId),
          fetchLegalguardianData(legalguardianId),
        ]);

        return {
          studentData,
          schoolData,
          legalguardianData,
        };
      })
    );

    setData([...data, ...newData]);
  };

  return (
    <>
      <StudentsPicker onPickHandler={onStudentsPick} />
      <StudentsTable data={data} />
    </>
  );
};

export default StudentsDataComponent;
