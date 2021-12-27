<template>
  <Tablelayout v-for="(semester, i) in semesters"
                     :key="semester.id"
                     :semester="semester"
                     :id="(i + 1)"
                     class="table-wrap"
  />
</template>

<script>
import Tablelayout from '@/layouts/Tablelayout'
export default {
  name: 'GradesTable',
  components: { Tablelayout },
  data () {
    return {
      semesters: [
        {
          id: 3,
          courses: [
            {
              code: 'CSS 152',
              name: 'Physics',
              credits: 3,
              ects: 5,
              absence: '0%',
              total: 29,
              letterGrade: 'IP',
              re1: '',
              re2: ''
            },
            {
              code: 'CSS 215',
              name: 'Introduction to Algorithms',
              credits: 3,
              ects: 5,
              absence: '0%',
              total: 57,
              letterGrade: 'IP',
              re1: '',
              re2: ''
            },
            {
              code: 'INF 202',
              name: 'Database 1',
              credits: 3,
              ects: 5,
              absence: '7%',
              total: 55,
              letterGrade: 'IP',
              re1: '',
              re2: ''
            },
            {
              code: 'INF 231',
              name: 'Web programming: front end',
              credits: 3,
              ects: 5,
              absence: '11%',
              total: 58,
              letterGrade: 'IP',
              re1: '',
              re2: ''
            },
            {
              code: 'MDE 113',
              name: 'Kazakh Language 1',
              credits: 3,
              ects: 5,
              absence: '13%',
              total: 55,
              letterGrade: 'IP',
              re1: '',
              re2: ''
            },
            {
              code: 'MDE 133',
              name: 'Turkish Language 3',
              credits: 3,
              ects: 5,
              absence: '7%',
              total: 60,
              letterGrade: 'IP',
              re1: '',
              re2: ''
            },
            {
              code: 'MDE 143',
              name: 'Physical Education 3',
              credits: 3,
              ects: 5,
              absence: '0%',
              total: 57,
              letterGrade: 'IP',
              re1: '',
              re2: ''
            },
            {
              code: 'MDE 191',
              name: 'Foreign Language 2 ',
              credits: 3,
              ects: 5,
              absence: '2%',
              total: 52,
              letterGrade: 'IP',
              re1: '',
              re2: ''
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
#tables {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 90%;
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

.dark {
    .table-wrap {
    background: linear-gradient(135deg, #3A416F 0%, #141727 90%);
    backdrop-filter: blur(50px);
    border: 1px solid #3A416F;
  }
}
</style>
