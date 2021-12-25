<template>
<div>
  <div id="top">
    <h1>Profile Settings</h1>
  </div>
  <div id="main">
    <section>
      <div>
        <div id="user-avatar">
          <div>
            <img src="@/assets/home/nav/avatar.jpg" width="180px">
          </div>
          <div>
            <input type="file" id="custom-file-input" accept="image/*">
            <label for="custom-file-input" id="photo-input">Choose a photo</label>
          </div>
        </div>
        <div class="checkbox-label">
            <span>Choose your performances:</span>
            <label>
              <div>
                <label>
                  <input type="checkbox">
                  <span>Outsource projects</span>
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox">
                  <span>Beta Career</span>
                </label>
              </div>
              <div>
                <label>
                  <input type="checkbox">
                  <span>Self Studies</span>
                </label>
              </div>
            </label>
          </div>
        <div class="textarea">
            <textarea rows="4" cols="40" name="text" placeholder="About you"></textarea>
        </div>
      </div>
      <div>
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 sm:col-span-3">
                    <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
                    <input type="text" name="first-name" id="first-name" placeholder="Aibolat" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>

          <div class="col-span-6 sm:col-span-3">
                    <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
                    <input type="text" name="last-name" id="last-name" placeholder="Batyrov" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>

          <div class="col-span-6 sm:col-span-3">
                    <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                    <input type="text" name="email-address" id="email-address" placeholder="aibolat.batyrov.03@gmail.com" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>

          <div class="col-span-6 sm:col-span-3">
                    <label for="country" class="block text-sm font-medium text-gray-700">Country</label>
                    <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                      <option>Russia</option>
                      <option>Kazakhstan</option>
                      <option>Kyrgyzstan</option>
                      <option>Uzbekistan</option>
                    </select>
                  </div>

          <div class="col-span-3">
                    <label for="street-address" class="block text-sm font-medium text-gray-700">Street address</label>
                    <input type="text" name="street-address" id="street-address" placeholder="Qyzylorda, Qydyrov st., 86" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>

          <div class="col-span-6 sm:col-span-2 lg:col-span-3">
                    <label for="city" class="block text-sm font-medium text-gray-700">Phone</label>
                    <input type="number" name="city" id="city" placeholder="+7776 842 82 14" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>

          <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                    <label for="birthday" class="block text-sm font-medium text-gray-700">Birthday</label>
                    <input type="date" name="region" id="birthday" placeholder="12-01-2003" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>

          <div class="radio-select col-span-3">
            <span>Choose staff</span>
            <div class="radio-box">
              <label class="radio-item">
                <input type="radio" name="options" class="radio">
                <label>Student</label>
              </label>
              <label class="radio-item">
                <input type="radio" name="options" class="radio">
                <label>Instructor</label>
              </label>
              <label class="radio-item">
                <input type="radio" name="options" class="radio">
                <label>Lecturer</label>
              </label>
            </div>
          </div>

          <div class="buttons col-span-3">
              <label>
                <button class="btn btn-primary">Change password</button>
              </label>
              <label>
                <button class="btn btn-primary">Send email</button>
              </label>
          </div>
          <div class="buttons col-span-3">
              <label>
                <button class="btn btn-primary">Quit</button>
              </label>
              <label>
                <button class="btn btn-outline-primary">Cancel</button>
              </label>
              <label>
                <button class="btn btn-primary">Save</button>
              </label>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
</template>

<script>

export default {
  name: 'ProfileSettings',
  components: { }
}
</script>

<style lang="less" scoped>
#top {
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5%;
  margin-bottom: 2rem;

  h1 {
    font-family: "Mark Pro", serif;
    font-size: 2rem;
    font-weight: 500;
    color: #2f3038;
  }
}

#main {
  height: 100%;
}

section {
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
  font-family: "Mark Pro", serif;
  font-size: 18px;
  margin-bottom: 3rem;

  div {
    width: 100%;
    height: 100%;
    #user-avatar {
      display: flex;
      width: auto;
      height: 50%;
      justify-content: flex-start;
      align-items: flex-start;

      div {
        width: auto;
      }

      img {
        border-radius: 1rem;
      }
    }
  }
}

input, select{
  height: 2.5rem;
  border: #c78dff 1px solid;
}

.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

#custom-file-input {
  display: none;
}

#photo-input {
  background: #b665ff;
  width: 8rem;
  height: 3rem;
  font-size: 0.8rem;
  color: #f3f3f3;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  margin-left: 2rem;
  cursor: pointer;
  transition: background-color .3s ease;

  &:hover {
    background: #9f3bff;
    transition: background-color .3s ease;
  }

  &:active {
    background: #7928CA;
  }
}

.radio-select {
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  justify-content: space-between;

  span {
    font-weight: 500;
  }

  .radio-box {
    display: flex;
  }

  .radio-item {
    padding: 0;
    display: flex;
    width: 50%;
    justify-content: space-around;
    align-items: center;
    input {
      width: 1.2rem;
    }
  }
}

.checkbox-label {
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;

  span {
    font-size: 1rem;
  }

  label {
    display: flex;
  }

  div {
    height: 2rem;
    label {
      display: flex;
      width: 90%;
      align-items: center;
      justify-content: flex-start;

      input {
        width: 1.2rem;
      }

      span {
        margin-left: 0.7rem;
      }
    }
  }
}

.textarea {
  margin-top: 2rem;
  span {
    font-size: 1rem;
  }
  textarea {
    border: #7928CA 1px solid;
    border-radius: .5rem;
    font-size: 1rem;
  }
}
</style>
