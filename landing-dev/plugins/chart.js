import Vue from 'vue'
import { Pie, Doughnut, Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

Vue.component('PieChart', {
	extends: Pie,
	props: ['data', 'options'],
	mounted () {
		this.renderChart(this.data, this.options)
	}
})

Vue.component('DoughnutChart', {
	extends: Doughnut,
	mixins: [reactiveProp],
	props: ['data', 'options'],
	mounted () {
		this.renderChart(this.data, this.options)
	}
})

Vue.component('BarChart', {
	extends: Bar,
	mixins: [reactiveProp],
	props: ['options'],
	mounted () {
		this.renderChart(this.chartData, this.options)
	}
})