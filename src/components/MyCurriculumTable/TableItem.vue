<template>
  <tr>
    <th class="number">{{ id }}</th>
    <td class="number">{{ course.code }}</td>
    <td class="">{{ course.name }}</td>
    <td class="number">{{ course.theory }}</td>
    <td class="number">{{ course.practice }}</td>
    <td class="number">{{ course.credits }}</td>
    <td class="number">{{ course.ects }}</td>
    <td class="number">{{ course.grade }}</td>
    <td class="number"> <PreRequisiteRectrangle v-if="course.requisites==='PR'"/> </td>
    <td class="number"> <StatusRectangle v-if="course.status==='available'"/> </td>
  </tr>
</template>

<script>
import StatusRectangle from '@/components/MyCurriculumTable/StatusRectangle'
import PreRequisiteRectrangle from '@/components/MyCurriculumTable/PreRequisiteRectrangle'
export default {
  name: 'TableItem',
  components: { PreRequisiteRectrangle, StatusRectangle },
  props: ['course', 'id'],
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.number {
  text-align: center;
}
</style>
