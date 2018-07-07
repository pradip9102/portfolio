Vue.component('radar-chart', {
    extends: VueChartJs.Radar,
    props: ['labels', 'values'],
    data: function () {
        return {
            name: '',
            labels: [],
            values: []
        }
    },
    mounted () {
        this.renderChart(
            {
                labels: this.labels,
                datasets: [
                    {
                        label: this.name,
                        data: this.values
                    }
                ]
            },
            {
                responsive: true,
                maintainAspectRatio: true,
                legend: {
                    position: 'top',
                    display: false
                },
                scale: {
                    ticks: {
                        min: 0,
                        max: 10,
                        display: false
                    }
                }
            }
        )
    }
});
