<template>
  <div>
    <table class="table table-hover">
      <caption align="top">Semester #{{ semester.id }}</caption>
      <thead>
      <tr>
        <th>Code</th>
        <th>Course name</th>
        <th>Credits</th>
        <th>ECTS</th>
        <th>Absence</th>
        <th>Total</th>
        <th>Letter Grade</th>
        <th>RE1</th>
        <th>RE2</th>
      </tr>
      </thead>
      <tbody>
      <TableItemlayout v-for="(course, i) in semester.courses" :key="course.id" :course="course" :id="(i + 1)"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import TableItemlayout from '@/layouts/TableItemlayout'

export default {
  name: 'Tablelayout',
  components: { TableItemlayout },
  props: ['semester', 'courses', 'id'],
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
table {
  width: 95%;
  font-family: "Mark Pro", serif;
  font-size: 14px;

  th {
    text-align: center;
  }
}

caption {
  color: #2f3038;
  font-size: 22px;
}
</style>
