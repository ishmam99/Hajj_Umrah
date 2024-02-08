<script setup>
import { defineProps } from 'vue'

defineProps({
    dataArray: Array,
    link: String,
    dataObject: Object
})
</script>

<template>
    <div v-for="course in dataArray" :key="course" class="slide">
        <div class="thumb">
            <img v-if="course.thumbnail_image" :src="'https://learningcenter.islamicdigitallane.com/images/'+course.thumbnail_image" />
            <img v-else src="@/assets/images/course-thumb.png" width="290" height="120" />
        </div>
        <div class="details">
            <h3 class="text-lg font-bold">
                {{ (course.title.length > 20) ? course.title.substring(0, 20)+'...' : course.title.substring(0, 20)}}
            </h3>
            <!-- <h6><small><strong>Instructor: Rafik Nasr</strong></small></h6> -->
            
            <!-- <p v-if="course.description.length > 200" v-html="course.description.substring(0, 200)+'...'">
            </p> -->

            <div v-html="course.description"></div>
            <!-- <h5 class="font-bold text-md">2 classes per week, 8 classes per month</h5> -->
            <!-- <RatingComponent /> -->
            <!-- <div class="price">${{ course.price }}</div> -->
        </div>
        
        <div class="details-btn">
            <router-link :to="link+course.id" class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 w-max me-2 mb-2">Details</router-link>
        </div>
    </div>

    <div v-for="course in dataObject" :key="course" class="card-bordered">
        <div class="thumb">
            <img v-if="course.course_thumbnail" :src="'https://learningcenter.islamicdigitallane.com/images/'+course.course_thumbnail" />
            <img v-else src="@/assets/images/course-thumb.png" width="290" height="120" />
        </div>
        <div class="p-4">
            <h3 class="text-sm">
                <strong>Course Name</strong> {{ course['course_title'] }}
            </h3>
            <h3 class="text-sm">
                <strong>Section ID</strong> {{ course['section_id'] }}
            </h3>
            <p class="course_description text-sm my-2" v-html="course.course_description"></p>

            <!-- <h3 class="text-sm">
                <strong>Course Type</strong> {{ course['course_type'] }}
            </h3>

            <h3 class="text-sm">
                <strong>Class Duration</strong> {{ course['class_duration'] }} Hour
            </h3>

            <h3 class="text-sm">
                <strong>Class Per Week</strong> {{ course['class_per_week'] }}
            </h3>

            <h3 class="text-sm">
                <strong>Cost Per Class</strong> {{ course['cost_per_class'] }} USD
            </h3> -->

            <h3 class="text-sm">
                <strong>Cost Per Month</strong> {{ course['cost_per_month'] }} USD
            </h3>
            <!-- <h6><small><strong>Instructor: Rafik Nasr</strong></small></h6> -->
            
            <!-- <p v-if="course['description'].length > 200" v-html="course['description'].substring(0, 200)+'...'">
            </p> -->

            <div v-html="course['description']"></div>
            <!-- <h5 class="font-bold text-md">2 classes per week, 8 classes per month</h5> -->
            <!-- <RatingComponent /> -->
            <!-- <div class="price">${{ course['price'] }}</div> -->
        </div>
        
        <div class="details-btn">
            <router-link :to="link+course['id']" class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 w-max">Details</router-link>
        </div>
    </div>
</template>

<style scoped>
.course_description {
    max-height: 60px;
    overflow: hidden;
}
.unique-courses {
    margin-top: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 15px;
}

.unique-courses > div {
    border-radius: 5px;
    border: 1px solid gray;
    padding: 20px;
    justify-self: center;
}
.unique-courses > div > *:last-child > * {
    margin-top: 10px;
}

/* Slider */

.slide {
    background: #F5F5F5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    text-decoration: none;
    color: inherit;
}

.slide:hover {
    opacity: 0.8;
}

.slide > .details  {
    padding: 20px;
}

.slide > .details > *  {
    margin: 5px 0;
    text-align: center;
}

.slide > .details > div {
    height: 120px;
    overflow: hidden;
    font-size: small;
    font-family: math !important;
}

.slide > .thumb {
    display: flex;
    justify-content: center;
}

.slide > .thumb > img{
    width: 100%;
    height: 150px;
}

.slide > .details > .price {
    font-weight: bold;
    font-size: 30px;
}

.slide > .details > .ratings {
    display: flex;
    gap: 10px;
    justify-content: center;
    color: #FFC700;
    font-weight: bold;
}

.details-btn {
    padding: 0 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
}

.card-bordered {
    border: 2px solid rgb(66, 66, 66);
    border-radius: 10px;
    margin-bottom: 15px;
    max-width: 250px;
}

</style>