<script setup>
import { defineProps } from 'vue'

defineProps({
    barColor: String,
    stepperColor: String,
    stepperTitle: String,
    stepNumber: String,
    stepCompleted: Boolean
})
</script>

<template>
    <div v-if="stepCompleted == true" class="w-1/2">
        <div class="relative mb-2">
          <div class="absolute flex align-center items-center align-middle content-center" style="z-index: 0;width: calc(100% - 51% - 1%); top: 5%; transform: translate(170%, 170%)">
            <div :class="'w-full bg-green-400 items-center align-middle align-center flex-1'">
              <div :class="'w-0 bg-green-400 py-1'" style="z-index:0;width: 150%;margin-left: -26%;"></div><!-- middle part 100 full & 50 half progressstatus-->
            </div>
          </div>

          <div :class="'w-10 h-10 mx-auto bg-green-400 border-2 border-green-400 rounded-full text-lg text-white flex items-center'">
            <span class="text-center text-white w-full">  
                <span v-if="stepNumber == ''" class="text-center text-white w-full">
                    <font-awesome-icon :icon="['fas', 'fa-check']"/>
                </span>                      
              <span v-else>{{ stepNumber }}</span>
            </span>
          </div>
        </div>
        <div class="text-sm text-center 2xl:text-base font-bold">{{ stepperTitle }}</div>
    </div>

    <div v-else class="w-1/2">
        <div class="relative mb-2">
          <div class="absolute flex align-center items-center align-middle content-center" style="z-index: 0;width: calc(100% - 51% - 1%); top: 5%; transform: translate(170%, 170%)">
            <div :class="'w-full bg-red-400 items-center align-middle align-center flex-1'">
              <div :class="'w-0 bg-red-400 py-1'" style="z-index:0;width: 150%;margin-left: -26%;"></div><!-- middle part 100 full & 50 half progressstatus-->
            </div>
          </div>

          <div :class="'w-10 h-10 mx-auto bg-red-400 border-2 border-red-400 rounded-full text-lg text-white flex items-center'">
            <span class="text-center text-white w-full">  
                <span v-if="stepNumber == ''" class="text-center text-white w-full">
                    <font-awesome-icon :icon="['fas', 'fa-check']"/>
                </span>                      
              <span v-else>{{ stepNumber }}</span>
            </span>
          </div>
        </div>

        <div class="text-sm text-center 2xl:text-base font-bold">{{ stepperTitle }}</div>
    </div>
</template>