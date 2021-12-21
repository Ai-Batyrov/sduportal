<template>
    <div>
      <table class="table table-hover">
        <caption align="top">Wish list basket</caption>
        <thead>
        <tr>
          <th>№</th>
          <th>Code</th>
          <th>Course name</th>
          <th>year</th>
          <th>term</th>
          <th>ECTS</th>
          <th>Operation</th>
        </tr>
        </thead>
        <tbody>
        <WishlistTableItem
          v-for="(course, i) in courses"
          :key="course.id"
          :course="course"
          :id="(i + 1)"
        />
        </tbody>
      </table>
    </div>
</template>

<script>
import WishlistTableItem from '@/components/Wishlist/WishlistTableItem'

export default {
  name: 'WishlistTable',
  components: { WishlistTableItem },
  data () {
    return {
      courses: [
        {
          id: 1,
          code: 'INF 305',
          name: 'Database Management Systems 2',
          year: 2021,
          term: 2,
          ects: 5,
          operation: 'remove'
        },
        {
          id: 2,
          code: 'MDE 114',
          name: 'Kazakh Language 2',
          year: 2021,
          term: 2,
          ects: 5,
          operation: 'remove'
        },
        {
          id: 3,
          code: 'MDE 134',
          name: 'Turkish Language 4 (А2 level)',
          year: 2021,
          term: 2,
          ects: 3,
          operation: 'remove'
        },
        {
          id: 4,
          code: 'MDE 144',
          name: 'Physical Education 4',
          year: 2021,
          term: 2,
          ects: 2,
          operation: 'remove'
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
  font-size: 1rem;

  th {
    text-align: center;
  }
}

caption {
  color: #2f3038;
  font-weight: bold;
  font-size: 1.5rem;
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
  margin-bottom: 2rem;
}
</style>
