import filtersData from '../data/filters.json'

export default function Filters() {
    // console.log("data:" + filtersData.data['mobile'])
    return <>
        <div id='filter'>
            <h1>filters</h1>
            {
                filtersData && filtersData.data['mobile'].map(function (item) {
                    return <div className='filter-item'>
                        <h2>{item}</h2>
                    </div>
                })
            }
        </div>
    </>
}