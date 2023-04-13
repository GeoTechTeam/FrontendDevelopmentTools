<template>
    <div class="window-height fixed-full">
        <div id="map-root" style="width:100%; height:100%">
        </div>
    </div>
</template>
  
<script setup>
import { onMounted, ref } from "vue";
import View from 'ol/View'
import Map from 'ol/Map'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import GeoJSON from 'ol/format/GeoJSON'
import {
    Modify,
    Select,
    defaults as defaultInteractions,
} from 'ol/interaction.js';
import 'ol/ol.css'

const olMap = ref(null);
const vectorLayer = ref(null);

const data = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                        [
                            -80.0703125,
                            43.58039085560784
                        ],
                        [
                            -40.125,
                            23.563987128451217
                        ],
                        [
                            -40.8984375,
                            32.84267363195431
                        ],
                        [
                            -80.0703125,
                            43.58039085560784
                        ]
                    ]
                ]
            }
        },
        {
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'Polygon',
                coordinates: [
                    [
                        [
                            -27.0703125,
                            43.58039085560784
                        ],
                        [
                            -28.125,
                            23.563987128451217
                        ],
                        [
                            -10.8984375,
                            32.84267363195431
                        ],
                        [
                            -27.0703125,
                            43.58039085560784
                        ]
                    ]
                ]
            }
        }
    ]
}
const updateSource = () => {
    const view = olMap.value.getView();
    const source = vectorLayer.value.getSource();
    const features = new GeoJSON({
        featureProjection: 'EPSG:3857',
    }).readFeatures(data);
    source.clear();
    source.addFeatures(features);
    view.fit(source.getExtent())
}
const initMap = () => {
    // a new vector layer is created with the feature
    vectorLayer.value = new VectorLayer({
        source: new VectorSource({
            features: [],
            wrapX: false,
        }),
    })

    const select = new Select({
        wrapX: false,
    });

    const modify = new Modify({
        features: select.getFeatures(),
    });


    olMap.value = new Map({
        interactions: defaultInteractions().extend([select, modify]),
        target: "map-root",
        layers: [
            new TileLayer({
                source: new OSM() // tiles are served by OpenStreetMap
            }),
            vectorLayer.value
        ],
        view: new View({
            center: [0, 0],
            zoom: 2
        })
    })
    updateSource();
}

onMounted(() => {
    initMap();

})

</script>

<style>
.cell-map {
    grid-column: 1;
    grid-row-start: 1;
    grid-row-end: 3;
}
</style>