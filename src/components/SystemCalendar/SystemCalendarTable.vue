<template>
<div>
  <table class="table table-hover">
    <thead>
    <tr>
      <th>#</th>
      <th>Event title</th>
      <th>Start date</th>
      <th>End date</th>
      <th>Status</th>
    </tr>
    </thead>
    <tbody>
    <SystemCalendarTableItem v-for="(event, i) in events" :key="event.id" :event="event" :id="(i + 1)"/>
    </tbody>
  </table>
</div>
</template>

<script>
import SystemCalendarTableItem from '@/components/SystemCalendar/SystemCalendarTableItem'
export default {
  name: 'SystemCalendarTable',
  // eslint-disable-next-line vue/no-unused-components
  components: { SystemCalendarTableItem },
  data () {
    return {
      events: [
        {
          id: 1,
          title: 'Add - Drop',
          start: '18.09.2021\n' +
            '00:00',
          end: '20.09.2021\n' +
            '23:00',
          status: 'closed'
        },
        {
          id: 2,
          title: 'Pre-final grade',
          start: '06.12.2021\n' +
          '00:00',
          end: '19.12.2021\n' +
            '23:59',
          status: 'closed'
        },
        {
          id: 3,
          title: 'Final Exam',
          start: '20.12.2021\n' +
            '00:00',
          end: '10.01.2022\n' +
            '23:00',
          status: 'opened'
        },
        {
          id: 4,
          title: 'Apply for FX1',
          start: '11.01.2022\n' +
            '00:00',
          end: '13.01.2022\n' +
            '23:00',
          status: 'closed'
        },
        {
          id: 5,
          title: 'Resit Exam 1',
          start: '18.01.2022\n' +
            '00:00',
          end: '21.01.2022\n' +
            '23:00',
          status: 'closed'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
table {
  width: 95%;
  font-family: "Mark Pro", serif;
  font-size: 1.2rem;

th {
  text-align: center;
}
}
</style>
