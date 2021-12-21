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
        <th>Grade</th>
        <th>Letter Grade</th>
        <th>Point</th>
        <th>Traditional</th>
      </tr>
      </thead>
      <tbody>
      <TranscriptTableItem v-for="(course, i) in semester.courses" :key="course.id" :course="course" :id="(i + 1)"/>
      </tbody>
    </table>
    <section>Grand GPA: {{ semester.gpa }}</section>
  </div>
</template>

<script>
import TranscriptTableItem from '@/components/Transcript/TranscriptTableItem'

export default {
  name: 'TranscriptTable',
  props: ['semester', 'courses', 'id', 'gpa'],
  components: { TranscriptTableItem }
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

section {
  width: 94%;
  text-align: end;
  font-family: "Mark Pro", serif;
  font-size: 16px;
}
</style>
