<template>
  <tr>
    <td>{{ course.code }}</td>
    <td>{{ course.name }}</td>
    <td>{{ course.credits }}</td>
    <td>{{ course.ects }}</td>
    <td>{{ course.grade }}</td>
    <td>{{ course.letterGrade }}</td>
    <td>{{ course.point }}</td>
    <td>
      <Excellent v-if="course.traditional==='excellent'" />
      <Good v-if="course.traditional==='good'" />
      <Satisfactory v-if="course.traditional==='satisfactory'" />
      <Pass v-if="course.traditional==='pass'" />
      <InProgress v-if="course.letterGrade==='IP'" />
    </td>
  </tr>
</template>

<script>
import Excellent from '@/components/Transcript/TraditionalRectangles/Excellent'
import Satisfactory from '@/components/Transcript/TraditionalRectangles/Satisfactory'
import Pass from '@/components/Transcript/TraditionalRectangles/Pass'
import Good from '@/components/Transcript/TraditionalRectangles/Good'
import InProgress from '@/components/Transcript/TraditionalRectangles/InProgress'

export default {
  name: 'TableItemlayout',
  components: { InProgress, Satisfactory, Excellent, Pass, Good },
  props: ['course', 'id'],
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
td {
  text-align: center;
}

.dark {
  td, tr, th {
    color: #d7d7d7;
  }
}
</style>
