<template>
  <tr>
    <td>{{ course.code }}</td>
    <td>{{ course.name }}</td>
    <td>{{ course.credits }}</td>
    <td>{{ course.ects }}</td>
    <td>{{ course.absence }}</td>
    <td>{{ course.total }}</td>
    <td>{{ course.letterGrade }}</td>
    <td> <RetakeRectangle v-if="course.re1==='re1'"/> </td>
    <td> <RetakeRectangle v-if="course.re2==='re2'"/> </td>
  </tr>
</template>

<script>
import RetakeRectangle from '@/components/Grades/RetakeRectangle'

export default {
  name: 'TableItemlayout',
  components: { RetakeRectangle },
  props: ['course', 'id'],
  data () {
    return {}
  }
}
</script>

<style scoped>
td {
  text-align: center;
}
</style>
