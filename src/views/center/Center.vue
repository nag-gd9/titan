<script setup>
import DataTable from 'datatables.net-vue3';
import DataTablesLib from 'datatables.net';
import 'datatables.net-select';
import 'datatables.net-buttons';
import 'datatables.net-buttons/js/buttons.html5';

DataTable.use(DataTablesLib);

const columns = [
  { data: 'name' },
  { data: 'position' },
  { data: 'office' },
  { data: 'extn' },
  { data: 'start_date' },
  { data: 'salary' },
];

const options = {
  dom: 'Bftip',
  select: true,
  responsive: true,
};
</script>

<template>
	<div class="w-full flex items-center justify-left ml-10">
		<div class="bg-white rounded md:border-l-4 border-red-300 my-4">
			<div class="text-left text-xs font-bold p-1 text-red-800 border-t bg-red-50">My Centers [57]</div>
			<div class="text-xs">
				<DataTable
				:columns="columns"
				:options="options"
				ajax="/data.json"
				class="display"
				width="100%"
				>
				
				<thead>
					<tr>
					<th>Name</th>
					<th>Position</th>
					<th>Office</th>
					<th>Extn.</th>
					<th>Start date</th>
					<th>Salary</th>
					</tr>
				</thead>
				
				</DataTable>
			</div>
		</div>
	</div>
</template>

<style>
@import 'datatables.net-dt';
@import 'datatables.net-buttons-dt';
@import 'datatables.net-select-dt';
</style>
