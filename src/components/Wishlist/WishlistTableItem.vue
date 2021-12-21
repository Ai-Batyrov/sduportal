<template>
  <tr>
    <th class="number">{{ id }}</th>
    <td class="number">{{ course.code }}</td>
    <td class="">{{ course.name }}</td>
    <td class="number">{{ course.year }}</td>
    <td class="number">{{ course.term }}</td>
    <td class="number">{{ course.ects }}</td>
    <td class="number"> <remove-button/> </td>
  </tr>
</template>

<script>

import RemoveButton from '@/components/Wishlist/removeButton'
export default {
  name: 'WishlistTableItem',
  components: { RemoveButton },
  props: ['course', 'id'],
  data () {
    return {}
  }
}
</script>

<style scoped>
.number {
  text-align: center;
  align-items: center;
}
</style>
