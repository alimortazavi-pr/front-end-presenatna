<template>
  <div class="mx-auto d-flex flex-column align-items-center text-white w-50">
    <h1 class="mb-2">Klart!</h1>
    <i class="fa-thin fa-circle-check fa-10x"></i>
    <router-link :to="{name : 'Cart'}" class="btn btn-warning btn-block w-75 mt-4 mb-2">Fortsätt till utcheckningen</router-link>
    <router-link :to="{name : 'StepOne'}" class="btn btn-info btn-block btn-simple w-75">Bygg en annan låda</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
