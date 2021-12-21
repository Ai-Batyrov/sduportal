<template>
  <div style="justify-content: flex-start">
    <div id="top">
      <h1>Transcript</h1>
      <profile />
    </div>
    <TranscriptInfoStudent />
    <br>
    <TranscriptTable
      v-for="(semester, i) in semesters"
      :key="semester.id"
      :semester="semester"
      :id="(i + 1)"
      class="table-wrap"
    />
  </div>
</template>

<script>
import TranscriptTable from '@/components/Transcript/TranscriptTable'
import Profile from '@/components/profile/profile'
import TranscriptInfoStudent from '@/components/Transcript/TranscriptInfoStudent'

export default {
  name: 'Transcript',
  components: { TranscriptInfoStudent, TranscriptTable, Profile },
  data () {
    return {
      semesters: [
        {
          id: 1,
          gpa: 2.67,
          courses: [
            {
              code: 'CSS 105',
              name: 'Fundamentals of Programming\t',
              credits: 3,
              ects: 5,
              grade: 50,
              letterGrade: 'D',
              point: '1',
              traditional: 'satisfactory'
            },
            {
              code: 'MAT 151',
              name: 'Linear Algebra',
              credits: 3,
              ects: 5,
              grade: 57,
              letterGrade: 'C',
              point: '2',
              traditional: 'satisfactory'
            },
            {
              code: 'MAT 153',
              name: 'Mathematics for Computer Science 1',
              credits: 3,
              ects: 5,
              grade: 55,
              letterGrade: 'B-',
              point: '2.67',
              traditional: 'good'
            },
            {
              code: 'CEC 102',
              name: 'General English A2',
              credits: 3,
              ects: 5,
              grade: 79,
              letterGrade: 'P',
              point: '',
              traditional: 'pass'
            },
            {
              code: 'MDE 131',
              name: 'Turkish Language 1',
              credits: 3,
              ects: 5,
              grade: 91,
              letterGrade: 'A-',
              point: '3.67',
              traditional: 'excellent'
            },
            {
              code: 'MDE 141',
              name: 'Physical Education 1',
              credits: 3,
              ects: 5,
              grade: 90,
              letterGrade: 'A-',
              point: '3.67',
              traditional: 'excellent'
            },
            {
              code: 'MDE 171',
              name: 'Modern History of Kazakhstan',
              credits: 3,
              ects: 5,
              grade: 96,
              letterGrade: 'A',
              point: '4',
              traditional: 'excellent'
            }
          ]
        },
        {
          id: 2,
          gpa: 2.66,
          courses: [
            {
              code: 'CSS 108',
              name: 'Programming Technologies and Educational Practice',
              credits: 3,
              ects: 5,
              grade: 84,
              letterGrade: 'B',
              point: '3',
              traditional: 'good'
            },
            {
              code: 'INF 106',
              name: 'Information and Communications Technologies',
              credits: 3,
              ects: 5,
              grade: 76,
              letterGrade: 'B-',
              point: '2.67',
              traditional: 'good'
            },
            {
              code: 'MAT 154',
              name: 'Mathematics for Computer Science 2',
              credits: 3,
              ects: 5,
              grade: 80,
              letterGrade: 'B',
              point: '3',
              traditional: 'good'
            },
            {
              code: 'MAT 156',
              name: 'Discrete Mathematics',
              credits: 3,
              ects: 5,
              grade: 55,
              letterGrade: 'D+',
              point: '1.33',
              traditional: 'satisfactory'
            },
            {
              code: 'MDE 103',
              name: 'Foreign Language 1',
              credits: 3,
              ects: 5,
              grade: 70,
              letterGrade: 'C+',
              point: '2.33',
              traditional: 'good'
            },
            {
              code: 'MDE 132',
              name: 'Turkish Language 2',
              credits: 3,
              ects: 5,
              grade: 87,
              letterGrade: 'B+',
              point: '3.33',
              traditional: 'good'
            },
            {
              code: 'MDE 142',
              name: 'Physical Education 2',
              credits: 3,
              ects: 5,
              grade: 95,
              letterGrade: 'A',
              point: '4',
              traditional: 'excellent'
            }
          ]
        },
        {
          id: 3,
          gpa: 2.66,
          courses: [
            {
              code: 'CSS 152',
              name: 'Physics',
              credits: 3,
              ects: 5,
              grade: 29,
              letterGrade: 'IP',
              point: '',
              traditional: ''
            },
            {
              code: 'CSS 215',
              name: 'Introduction to Algorithms',
              credits: 3,
              ects: 5,
              grade: 57,
              letterGrade: 'IP',
              point: '',
              traditional: ''
            },
            {
              code: 'INF 202',
              name: 'Database 1',
              credits: 3,
              ects: 5,
              grade: 55,
              letterGrade: 'IP',
              point: '',
              traditional: ''
            },
            {
              code: 'INF 231',
              name: 'Web programming: front end',
              credits: 3,
              ects: 5,
              grade: 58,
              letterGrade: 'IP',
              point: '',
              traditional: ''
            },
            {
              code: 'MDE 113',
              name: 'Kazakh Language 1',
              credits: 3,
              ects: 5,
              grade: 55,
              letterGrade: 'IP',
              point: '',
              traditional: ''
            },
            {
              code: 'MDE 133',
              name: 'Turkish Language 3',
              credits: 3,
              ects: 5,
              grade: 60,
              letterGrade: 'IP',
              point: '',
              traditional: ''
            },
            {
              code: 'MDE 143',
              name: 'Physical Education 3',
              credits: 3,
              ects: 5,
              grade: 57,
              letterGrade: 'IP',
              point: '',
              traditional: ''
            },
            {
              code: 'MDE 191',
              name: 'Foreign Language 2 ',
              credits: 3,
              ects: 5,
              grade: 52,
              letterGrade: 'IP',
              point: '',
              traditional: ''
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
#top {
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5%;
  margin-bottom: 2rem;

  h1 {
    font-family: "Mark Pro", serif;
    color: rgba(37, 53, 78, 0.9);
  }
}

.table-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border-radius: 12px;
  padding: 10px 10px 20px 10px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 4rem;
}
</style>
