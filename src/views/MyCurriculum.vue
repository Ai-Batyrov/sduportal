<template>
  <div>
    <div id="top">
      <h1>My Curriculum / Course Structure</h1>
      <profile @toggle="$emit('toggle')" />
    </div>
    <div id="tables">
      <Table />
    </div>
  </div>
</template>

<script>
import Profile from '@/components/dropdowns/profile'
import Table from '@/components/MyCurriculumTable/Table'
export default {
  name: 'MyCurriculum',
  components: { Table, Profile },
  data () {
    return {
      semesters: [
        {
          id: 1,
          courses: [
            {
              code: 'CSS 105',
              name: 'Fundamentals of Programming',
              theory: 2,
              practice: '0 + 2',
              credits: 4,
              ects: 5,
              grade: 'D',
              requisites: '',
              status: ''
            },
            {
              code: 'MAT 151',
              name: 'Linear Algebra',
              theory: 2,
              practice: '0 + 1',
              credits: 3,
              ects: 5,
              grade: 'C',
              requisites: '',
              status: ''
            },
            {
              code: 'MAT 153',
              name: 'Mathematics for Computer Science 1',
              theory: 2,
              practice: '0 + 2',
              credits: 4,
              ects: 5,
              grade: 'B-',
              requisites: '',
              status: ''
            },
            {
              code: 'MDE 141',
              name: 'Physical Education 1',
              theory: 0,
              practice: '1 + 0',
              credits: 1,
              ects: 2,
              grade: 'A-',
              requisites: '',
              status: ''
            },
            {
              code: 'MDE 171',
              name: 'Modern History of Kazakhstan',
              theory: 2,
              practice: '1 + 0',
              credits: 3,
              ects: 5,
              grade: 'A',
              requisites: '',
              status: ''
            },
            {
              code: 'CEC 102',
              name: 'Foreign Language 1',
              theory: 0,
              practice: '3 + 0',
              credits: 3,
              ects: 5,
              grade: 'D',
              requisites: '',
              status: ''
            },
            {
              code: 'MDE 131',
              name: 'Turkish Language 1',
              theory: 0,
              practice: '2 + 0',
              credits: 2,
              ects: 3,
              grade: 'A-',
              requisites: '',
              status: ''
            }
          ]
        },
        {
          id: 2,
          courses: [
            {
              code: 'CSS 108',
              name: 'Programming Technologies and Educational Practice',
              theory: 2,
              practice: '0 + 2',
              credits: 4,
              ects: 5,
              grade: 'B',
              requisites: 'PR',
              status: ''
            },
            {
              code: 'INF 106',
              name: 'Information and Communication Technologies',
              theory: 2,
              practice: '0 + 1',
              credits: 5,
              ects: 5,
              grade: 'B-',
              requisites: '',
              status: ''
            },
            {
              code: 'MAT 154',
              name: 'Mathematics for Computer Science 2',
              theory: 2,
              practice: '0 + 2',
              credits: 4,
              ects: 5,
              grade: 'B',
              requisites: 'PR',
              status: ''
            },
            {
              code: 'MAT 156',
              name: 'Discrete Mathematics',
              theory: 0,
              practice: '1 + 0',
              credits: 3,
              ects: 2,
              grade: 'D+',
              requisites: '',
              status: ''
            },
            {
              code: 'MDE 142',
              name: 'Physical Education 2',
              theory: 0,
              practice: '1 + 0',
              credits: 1,
              ects: 2,
              grade: 'A',
              requisites: '',
              status: ''
            },
            {
              code: 'MDE 103',
              name: 'Foreign Language 2',
              theory: 0,
              practice: '3 + 0',
              credits: 3,
              ects: 5,
              grade: 'C+',
              requisites: '',
              status: ''
            },
            {
              code: 'MDE 132',
              name: 'Turkish Language 2',
              theory: 0,
              practice: '2 + 0',
              credits: 2,
              ects: 3,
              grade: 'B+',
              requisites: '',
              status: ''
            }
          ]
        },
        {
          id: 3,
          courses: [
            {
              code: 'CSS 152',
              name: 'Physics',
              theory: 2,
              practice: '1 + 0',
              credits: 3,
              ects: 5,
              grade: 'IP',
              requisites: '',
              status: ''
            },
            {
              code: 'CSS 215',
              name: 'Introduction to Algorithms',
              theory: 2,
              practice: '0 + 1',
              credits: 5,
              ects: 5,
              grade: 'IP',
              requisites: 'PR',
              status: ''
            },
            {
              code: 'INF 202',
              name: 'Database 1',
              theory: 2,
              practice: '0 + 2',
              credits: 4,
              ects: 5,
              grade: 'IP',
              requisites: '',
              status: ''
            },
            {
              code: 'INF 231',
              name: 'Web programming: front-end',
              theory: 0,
              practice: '1 + 0',
              credits: 3,
              ects: 2,
              grade: 'IP',
              requisites: '',
              status: ''
            },
            {
              code: 'MDE 143',
              name: 'Physical Education 3',
              theory: 0,
              practice: '1 + 0',
              credits: 1,
              ects: 2,
              grade: 'A',
              requisites: '',
              status: ''
            },
            {
              code: 'MDE 191',
              name: 'Foreign Language 3',
              theory: 0,
              practice: '3 + 0',
              credits: 3,
              ects: 5,
              grade: 'IP',
              requisites: '',
              status: ''
            },
            {
              code: 'MDE 133',
              name: 'Turkish Language 3',
              theory: 0,
              practice: '2 + 0',
              credits: 2,
              ects: 3,
              grade: 'IP',
              requisites: '',
              status: ''
            },
            {
              code: 'MDE 113',
              name: 'Kazakh Language 1',
              theory: 0,
              practice: '2 + 0',
              credits: 2,
              ects: 3,
              grade: 'IP',
              requisites: '',
              status: ''
            }
          ]
        },
        {
          id: 4,
          courses: [
            {
              code: 'CSS 220',
              name: 'Advanced Algorithms',
              theory: 2,
              practice: '1 + 0',
              credits: 3,
              ects: 5,
              grade: '',
              requisites: 'PR',
              status: ''
            },
            {
              code: 'INF 305',
              name: 'Database 2',
              theory: 2,
              practice: '0 + 2',
              credits: 4,
              ects: 5,
              grade: '',
              requisites: 'PR',
              status: ''
            },
            {
              code: 'INF 232',
              name: 'Web programming: back-end',
              theory: 0,
              practice: '1 + 0',
              credits: 3,
              ects: 2,
              grade: '',
              requisites: 'PR',
              status: ''
            },
            {
              code: 'MDE 143',
              name: 'Physical Education 3',
              theory: 0,
              practice: '1 + 0',
              credits: 1,
              ects: 2,
              grade: '',
              requisites: '',
              status: ''
            },
            {
              code: 'INF 313',
              name: 'Computer Networks',
              theory: 0,
              practice: '3 + 0',
              credits: 3,
              ects: 5,
              grade: '',
              requisites: '',
              status: ''
            },
            {
              code: 'MDE 134',
              name: 'Turkish Language 4',
              theory: 0,
              practice: '2 + 0',
              credits: 2,
              ects: 3,
              grade: '',
              requisites: '',
              status: 'available'
            },
            {
              code: 'MDE 114',
              name: 'Kazakh Language 2',
              theory: 0,
              practice: '2 + 0',
              credits: 2,
              ects: 3,
              grade: '',
              requisites: '',
              status: 'available'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
#MyCurriculum {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#top {
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10%;
  margin-bottom: 2rem;

  h1 {
    font-family: "Mark Pro", serif;
    font-size: 2rem;
    font-weight: 500;
  }
}

#tables {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
}

</style>
