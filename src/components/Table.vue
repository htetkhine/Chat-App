<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">No</th>
                <th scope="col">Payment</th>
                <th scope="col">Principal</th>
                <th scope="col">Interest</th>
                <th scope="col"> Column1 </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="data in emiData" :key="data.principal">
                <th>{{ data.no }}</th>
                <td>{{ data.payment }}</td>
                <td>{{ data.principal }}</td>
                <td>{{ data.interest }}</td>
                <td>{{ data.column1 }}</td>
            </tr>
        </tbody>
    </table>
    
</template>

<script setup>
    import { defineProps , ref } from 'vue';
    const props =  defineProps({emiData:Array});
</script>

<style lang="scss" scoped>

</style>