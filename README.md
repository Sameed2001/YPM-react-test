# YPM-react-test

# Instructions to run the code

1. Download the ZIP folder from GitHub
2. Unzip the folder
3. Open in VS Code
4. open new terminal
5. enter command "npm install"
6. when its done, enter command "npm start"
7. you can check the modified code in src/components/StudentsDataComponent.js

In the modified code, I have used a single state variable data to store the fetched data for all the students. The onStudentsPick function uses Promise.all to fetch the student, school, and legal guardian data for each student in parallel. Once all the data is fetched, it is combined with the existing data using the spread operator and updated using the functional form of setData. This ensures that unnecessary re-renders are avoided, and the state is updated only when all the data for onStudentsPick is loaded.

The StudentsTable component now receives the data prop, which contains an array of objects with studentData, schoolData, and legalguardianData for each student. 
