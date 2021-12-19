<template>
  <div>
    <table class="table table-hover">
      <caption align="top">Semester #{{ semester.id }}</caption>
      <thead>
      <tr>
        <th>№</th>
        <th>Code</th>
        <th>Course name</th>
        <th>theory</th>
        <th>practice</th>
        <th>credits</th>
        <th>ECTS</th>
        <th>grade</th>
        <th >requisites</th>
        <th>status</th>
      </tr>
      </thead>
      <tbody>
      <TableItem v-for="(course, i) in semester.courses" :key="course.id" :course="course" :id="(i + 1)"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import TableItem from '@/components/MyCurriculumTable/TableItem'
export default {
  name: 'MyCurriculumTable',
  components: { TableItem },
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
