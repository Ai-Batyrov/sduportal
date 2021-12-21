<template>
  <div>
    <div id="top">
      <h1>Wishlist</h1>
      <profile />
    </div>
    <div id="main">
      <section>
        <label><strong>Warning!</strong></label>
        <label>This is preregistration for courses that you want to take at chosen semester.
          This is for planning. This is not real registration!
            You will need to perform actual registration with respect to academic calendar.
        </label>
      </section>
      <div id="tables">
        <WishlistTable class="table-wrap"/>
        <section>
          <label><strong>Course Structure</strong></label>
        </section>
        <Table />
      </div>
    </div>
  </div>
</template>

<script>
import profile from '@/components/profile/profile'
import WishlistTable from '@/components/Wishlist/WishlistTable'
import Table from '@/components/MyCurriculumTable/Table'

export default {
  name: 'Wishlist',
  components: { Table, WishlistTable, profile },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
#top {
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10%;
  margin-bottom: 2rem;

  h1 {
    font-family: "Mark Pro", serif;
  }
}

#main {
  width: 100%;
  height: 100%;
}

section {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
  font-family: "Mark Pro", serif;
  font-size: 18px;
  margin-bottom: 2.5rem;
}

#tables {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
}

</style>
