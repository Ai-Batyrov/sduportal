<template>
<div>
  <div id="top">
    <h1>Consent Requests</h1>
    <profile />
  </div>
  <div id="main">
    <section>
      <div>
        <div>
          <label>
            <strong>Request №1</strong><br>
            Dear student, Aibolat Batyrov! <br>
            We will offer a discount on your current course "Web programming: frontend" to evaluate your session in a cumulative way.<br>
            Would you agree to accept our offer for the course "Web programming: front-end" ?
          </label>
        </div>
        <div style="justify-content: end">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="10rem">
            <path class="cls-1" d="M46.28325,57.0136H25.581a2.30233,2.30233,0,1,0,0,4.60466H46.28325a2.30233,2.30233,0,1,0,0-4.60466Z"/>
            <path class="cls-1" d="M79.11954,61.61826a2.30233,2.30233,0,0,0,0-4.60466H57.457a2.30233,2.30233,0,0,0-.00033,4.60466Z"/>
            <path class="cls-1" d="M46.28325,92.84847H25.581a2.30224,2.30224,0,1,0,0,4.60448H46.28325a2.30224,2.30224,0,1,0,0-4.60448Z"/>
            <path class="cls-1" d="M55.154,95.1524a2.3011,2.3011,0,0,0,2.30378,2.29887H77.28l-.07844-4.60262H57.45777A2.30737,2.30737,0,0,0,55.154,95.1524Z"/>
            <path class="cls-1" d="M46.28325,74.931H25.581a2.30239,2.30239,0,1,0,0,4.60478H46.28325a2.30239,2.30239,0,0,0,0-4.60478Z"/>
            <path class="cls-1" d="M81.4218,77.23337a2.305,2.305,0,0,0-2.30225-2.3024H57.457a2.30239,2.30239,0,0,0-.00033,4.60478H79.11954A2.30493,2.30493,0,0,0,81.4218,77.23337Z"/>
            <path class="cls-2" d="M95.58765,98.85317v12.19039a3.55521,3.55521,0,0,1-3.55369,3.54879H13.00474a3.55521,3.55521,0,0,1-3.55369-3.54879V39.74912H24.29322A11.5181,11.5181,0,0,0,35.79739,28.24494V13.40278H92.034a3.55625,3.55625,0,0,1,3.55369,3.55369V59.9586l7.95048-12.36194V16.95647A11.5118,11.5118,0,0,0,92.034,5.45229H31.82217a4.00894,4.00894,0,0,0-2.81845,1.16659l-6.75448,6.78389L9.45105,26.25978,3.28968,32.45056a3.97661,3.97661,0,0,0-1.78911,3.32333v75.26966a11.51807,11.51807,0,0,0,11.50418,11.50415H92.034a11.51492,11.51492,0,0,0,11.50418-11.50415V86.80982L96.78856,97.30423A11.26152,11.26152,0,0,1,95.58765,98.85317Z"/>
            <path class="cls-1" d="M81.59843,91.93l.12368,7.28135L80.746,100.729a1.0326,1.0326,0,1,0,1.73688,1.11729l.97623-1.51755,6.67706-2.907a6.65935,6.65935,0,0,0,2.9426-2.50333l28.497-44.30353a6.1963,6.1963,0,0,0-10.42264-6.7041l-28.497,44.30353A6.65958,6.65958,0,0,0,81.59843,91.93Z"/>
            <path class="cls-1" d="M125.78824,52.65782a1.54893,1.54893,0,0,0-2.14064.46476L109.67973,74.838a1.54894,1.54894,0,0,0,2.60544,1.67588L126.253,54.79847A1.54894,1.54894,0,0,0,125.78824,52.65782Z"/>
          </svg>
        </div>
      </div>
      <div style="justify-content: end">
        <div style="width: 15%">
          <button id="cancel">Cancel</button>
          <button id="agree">Agree</button>
        </div>
      </div>
    </section>
  </div>
</div>
</template>

<script>
import profile from '@/components/dropdowns/profile'

export default {
  name: 'ConsentRequests',
  components: { profile }
}
</script>

<style lang="less" scoped>
#top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10%;
  margin-bottom: 2rem;

  h1 {
    font-family: "Mark Pro", serif;
    font-size: 2rem;
    font-weight: 500;
  }
}

#main {
  height: 100%;
}

section {
  width: 100%;
  height: 19rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
  font-family: "Mark Pro", serif;
  font-size: 18px;
  margin-bottom: 3rem;
  div {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: auto;
  }
}

svg {
  .cls-1{fill:#2e79bd;}
  .cls-2{fill:#2d3e50;}
}

button {
  width: 7rem;
  height: 3rem;
  background: linear-gradient(135deg, #ff74ac 0%, #d51c1c 100%);
  border-radius: 0.8rem;
  font-size: 1.3rem;
  border: none;
  color: #FFFFFF;
  transition: all 0.3s linear;

  &:hover {
    transform: scale(1.03);
    transition: all 0.3s linear;
  }

  &:active {
    transform: scale(0.99);
  }
}

#agree {
  background: linear-gradient(135deg, #55e256 0%, #0a8d0e 100%);
}

#cancel {
  background: none;
  color: #1a69e3;
}
</style>
