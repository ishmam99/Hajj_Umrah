<template>
    <div class='section-description'>
        <slot />
    </div>
</template>

<style>
.section-description {
    font-size: 20px;
}

.section-description > * {
    margin-bottom: 15px !important;
    font-size: 17px !important;
    font-family: math !important;
}
</style>