<script setup>
import { reactive } from "vue";
import TableComponent from "../components/TableCom.vue";
import Header from "../json/Header.json";
import User from "../json/User.json";

const tableData = reactive({
  header: Header,
  data: User,
});

const ShowDatahandle = (data) => {
  alert(
    `Nama ${data.nama}, Posisi ${data.position}, No Telp. ${data.no_telp} , Email ${data.email} `
  );
};
</script>

<template>
  <div>
    <h3>Table View</h3>
    <TableComponent :dataTable="tableData" @showData="ShowDatahandle" />
  </div>
</template>