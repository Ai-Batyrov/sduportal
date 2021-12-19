<template>
  <div>
    <h2 style="font-family: 'Mark Pro', serif">Electronic Attendance</h2>
    <br>
    <table class="table table-hover table-bordered">
      <thead>
      <tr>
        <th class="">Code</th>
        <th class="">Course name</th>
        <th class="">Hours</th>
        <th class="">&#10004;</th>
        <th class="">&#10060;</th>
        <th class="">P</th>
        <th class="">Absence</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th class="">CSS 215</th>
        <td class="">Introduction to Algorithms</td>
        <td class="">45</td>
        <td class="">43</td>
        <td class="">2</td>
        <td class=""></td>
        <td class="">
          <div class="w3-grey">
            <div class="w3-blue" style="width:4%">4%</div>
          </div>
        </td>
      </tr>
      <tr>
        <th class="">CSS 152</th>
        <td class="">Physics</td>
        <td class="">45</td>
        <td class="">45</td>
        <td class=""></td>
        <td class=""></td>
        <td class="">
          <div class="w3-grey">
            <div class="w3-blue" style="width:0%">0%</div>
          </div>
        </td>
      </tr>
      <tr>
        <th class="">INF 231</th>
        <td class="">Web programming: front-end</td>
        <td class="">45</td>
        <td class="">42</td>
        <td class="">3</td>
        <td class=""></td>
        <td class="">
          <div class="w3-grey">
            <div class="w3-blue" style="width:11%">11%</div>
          </div>
        </td>
      </tr>
      <tr>
        <th class="">INF 202</th>
        <td class="">Database 1</td>
        <td class="">45</td>
        <td class="">40</td>
        <td class="">3</td>
        <td class="">2</td>
        <td class="">
          <div class="w3-grey">
            <div class="w3-blue" style="width:7%">7%</div>
          </div>
        </td>
      </tr>
      <tr>
        <th class="">MDE 113</th>
        <td class="">Kazakh Language 1 (B1 level)</td>
        <td class="">45</td>
        <td class="">39</td>
        <td class="">6</td>
        <td class=""></td>
        <td class="">
          <div class="w3-grey">
            <div class="w3-blue" style="width:13%">13%</div>
          </div>
        </td>
      </tr>
      <tr>
        <th class="">MDE 133</th>
        <td class="">Turkish Language 3 (А2 level)</td>
        <td class="">30</td>
        <td class="">28</td>
        <td class="">2</td>
        <td class=""></td>
        <td class="">
          <div class="w3-grey">
            <div class="w3-blue" style="width:7%">7%</div>
          </div>
        </td>
      </tr>
      <tr>
        <th class="">MDE 143</th>
        <td class="">Physical Education 3</td>
        <td class="">15</td>
        <td class="">13</td>
        <td class="">2</td>
        <td class=""></td>
        <td class="">
          <div class="w3-grey">
            <div class="w3-blue" style="width:0%">0%</div>
          </div>
        </td>
      </tr>
      <tr>
        <th class="">MDE 191</th>
        <td class="">Foreign Language 2</td>
        <td class="">45</td>
        <td class="">43</td>
        <td class="">2</td>
        <td class=""></td>
        <td class="">
          <div class="w3-grey">
            <div class="w3-blue" style="width:2%">2%</div>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Attendance'
}
</script>

<style scoped>
table {
  font-family: 'Mark Pro', serif;
}
</style>
