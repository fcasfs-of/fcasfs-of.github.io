
//<div data-service="<service-name>" data-id="<resource-id>" data-params="<iframe-query-parameters>" data-thumbnail="<path-to-image>" data-autoscale data-ratio="<x:y>"></div>


function loaded_iframes(){
  if (cokk_plu_esdnf && langs_cframe){
const imbjd = iframemanager();
    imbjd.run({
        currLang: cokk_plu_esdnf,
        services: {
            cloudfs_net: {
                embedUrl: 'https://{data-id}.cloud-fs.net',
                thumbnailUrl: 'https://{data-id}.cloud-fs.net/Icon/info.png',
                iframe: {
                    allow : 'accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen;'
                },
                languages: langs_cframe
            }
        }
    });
  }     }

