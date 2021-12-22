<template>
<div>
  <div id="top">
    <h1>Online Services</h1>
    <profile />
  </div>
  <div id="main">
    <section>
      <div>
        <div>
          <label><strong>Send Order:</strong></label><br>
          <label><i>Here you can order transcripts and references online.</i></label>
        </div>
        <div>
          <div class="order">
            <label>Order type:</label>
            <div style="width: 71%">
              <select>
                <option value="1">Transcript</option>
                <option value="2">Information about studying place (University)</option>
                <option value="3">Military Service (Certificate №3)</option>
                <option value="4">English Language Courser Receipt</option>
                <option value="5">Certificate №4</option>
                <option value="6">Certificate №6</option>
                <option value="7">Certificate №2-1</option>
              </select>
            </div>
          </div>
          <div class="order">
            <label>Description:</label>
          </div>
          <div class="order">
            <label>Language:</label>
            <div style="width: 71%">
              <select>
                <option value="1">Қазақ</option>
                <option value="2">Русский</option>
                <option value="3">English</option>
              </select>
            </div>
          </div>
          <div class="order">
            <label>Delivery method:</label>
            <div style="width: 71%">
              <select>
                <option value="1">Student Affairs</option>
                <option value="2">Online</option>
              </select>
            </div>
          </div>
          <div class="order">
            <button class="btn btn-primary">Send</button>
          </div>
        </div>
      </div>
      <div style="display: flex; flex-direction: column; justify-content: space-between; height: 100%">
        <div>
          <img src="../assets/onlineServices.png" alt="online-ervice">
        </div>
        <div>
          <label>Dear student, please read the rules for obtaining certificate on my.sdu.edu.kz portal</label>
          <ol>
            <li>Choose the type of certificate you need</li>
            <li>You can order each certificate only once a week</li>
            <li>
              If you need the original certificate or transcript:
              <ul>
                <li>You can pick up from the university from 14.00-17.00 on weekdays</li>
                <li>our relatives, friends can pick up instead of you</li>
              </ul>
            </li>
            <li>
              Processing takes:
              <ul>
                <li>Certificate with EDS 3 working days</li>
                <li>Original certificate without EDS 3-5 working days</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </section>
  </div>
</div>
</template>

<script>
import profile from '@/components/profile/profile'

export default {
  name: 'OnlineServices',
  components: { profile }
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
  height: 100%;
}

section {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
  font-family: "Mark Pro", serif;
  font-size: 18px;
  margin-bottom: 3rem;

  div {
    width: 90%;
    height: 100%;
  }
}

.order {
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

select {
  height: 3.3rem;
  border: #7928CA 1px solid;
  border-radius: 0.5rem;
}

button {
  font-size: 1.4rem;
  background: linear-gradient(135deg, #747dff 0%, #1f1cd5 100%);
  border-radius: 0.5rem;
  transition: all 0.3s linear;
  &:hover {
    transform: scale(1.05);
    transition: 0.3s linear;
  }

  &:active {
    transform: scale(0.99);
  }
}
</style>
