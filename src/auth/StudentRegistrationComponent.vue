<script setup>
import { ref, onMounted, defineProps } from 'vue'
import Stepper from '@/components/Stepper/StepperComponent.vue'
import axios from 'axios'

defineProps({
  payment: Boolean,
  approved: Boolean,
})

const user = JSON.parse(localStorage.getItem('user'))
const api = 'user/edit-profile/'
let userData = ref([])

async function getUser(id) {
  const resp = await axios.get(
    import.meta.env.VITE_ELEARNING_BASE_API + api + id
  )
  userData.value = resp.data.data
}

onMounted(() => {
  getUser(user.id)
})
</script>

<template>
  <div class="display-center">
    <div class="teacher-verification">
      <div class="verification-content">
        <div class="verification-header text-center">
          <h2 class="text-1xl font-bold">Course Enrollment Status</h2>
        </div>
        <div class="verification-steps mt-4">
          <div class="flex" id="ProgressStepper">
            <Stepper
              :stepCompleted="
                payment == 'true' || approved == 'true' ? true : false
              "
              :stepNumber="payment == 'true' || approved == 'true' ? '' : '1'"
              :stepperTitle="'Enrollment'"
            />

            <Stepper
              :stepCompleted="
                payment == 'true' || approved == 'true' ? true : false
              "
              :stepNumber="payment == 'true' || approved == 'true' ? '' : '2'"
              :stepperTitle="'Payment'"
            />

            <Stepper
              :stepCompleted="approved == 'true' ? true : false"
              :stepNumber="approved == 'true' ? '' : '3'"
              :stepperTitle="'Advisor Meeting'"
            />

            <div v-if="approved == 'true'" class="w-1/2">
              <div class="relative mb-2">
                <div
                  class="w-10 h-10 mx-auto bg-green-400 rounded-full text-lg text-white flex items-center"
                >
                  <span class="text-center text-white w-full">
                    <font-awesome-icon :icon="['fas', 'fa-check']" />
                  </span>
                </div>
              </div>

              <div class="text-sm text-center 2xl:text-base font-bold">
                Onboard
              </div>
            </div>

            <div v-else class="w-1/2">
              <div class="relative mb-2">
                <div
                  class="w-10 h-10 mx-auto bg-red-400 rounded-full text-lg text-white flex items-center"
                >
                  <span class="text-center text-white w-full">4</span>
                </div>
              </div>

              <div class="text-sm text-center 2xl:text-base font-bold">
                On Boarding
              </div>
            </div>

            <!-- <Stepper 
              :stepCompleted="(user.teacher_status === 'On boarding') ? true : false"
              :stepNumber="(user.teacher_status === 'On boarding') ? '' : '7'"
              :stepperTitle="'On Boarding'"
              /> -->
          </div>

          <!-- <div class="verification-step-description mt-4">
            <div v-if="userData.user_status_id == '22'" class="mt-4 text-center">
              Your registration request submitted successfully.
            </div>
            <div v-if="userData.user_status_id == '25'" class="mt-4 text-center">
              Your Orientation was scheduled
            </div>
            <div v-if="userData.user_status_id == '26'" class="mt-4 text-center">
              Welcome to the Onboard !
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.teacher-verification {
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: start;
}

.step-headline {
  display: grid;
  gap: 10px;
}

.step-headline > * {
  justify-self: center;
  align-self: center;
}

.step-headline > span:first-child {
  height: 40px;
  width: 40px;
  background-color: rgb(255, 104, 104);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.step-description {
}

.step-description-last {
  padding: 20px;
  margin-left: 20px;
}

.active-step {
  background-color: green !important;
}

/* New Steps  */

.step-names {
  display: flex;
  gap: 40px;
}

.step-name > * {
  width: 100px;
}

.dash {
  width: 20px;
  height: 2px;
  background: gray;
  margin-top: 20px;
}
.display-center {
  display: flex;
  justify-content: center;
}
</style>

<!-- <script>
import { useRouter } from 'vue-router';

export default {
  props: {
    user: Object
  },
  setup() {
    const router = useRouter();

    const verifyTeacher = () => {
      router.push('/dashboard');
    };

    return {
      verifyTeacher,
    };
  },
};
</script> -->
