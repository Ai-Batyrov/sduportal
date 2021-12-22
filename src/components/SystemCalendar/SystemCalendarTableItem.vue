<template>
  <tr>
    <td>{{ event.id }}</td>
    <td>{{ event.title }}</td>
    <td>{{ event.start }}</td>
    <td>{{ event.end }}</td>
    <td>
      <ClosedRectangle v-if="event.status==='closed'" />
      <OpenRectangle v-if="event.status==='opened'" />
    </td>
  </tr>
</template>

<script>
import ClosedRectangle from '@/components/SystemCalendar/ClosedRectangle'
import OpenRectangle from '@/components/SystemCalendar/OpenRectangle'
export default {
  name: 'SystemCalendarTableItem',
  components: { ClosedRectangle, OpenRectangle },
  props: ['event', 'id'],
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
