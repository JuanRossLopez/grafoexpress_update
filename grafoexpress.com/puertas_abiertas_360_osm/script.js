TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "preloadEnabled": false,
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "mouseControlMode": "drag_acceleration",
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true,
  "class": "PanoramaPlayer",
  "touchControlMode": "drag_rotation"
 },
 {
  "vfov": 180,
  "partial": false,
  "class": "Panorama",
  "hfovMax": 84,
  "id": "panorama_AF02CB48_A4EE_9D78_41E4_45AD3E04CA86",
  "pitch": 0,
  "hfov": 360,
  "label": "foto aerea 360 Osmosis",
  "thumbnailUrl": "media/panorama_AF02CB48_A4EE_9D78_41E4_45AD3E04CA86_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_AF02CB48_A4EE_9D78_41E4_45AD3E04CA86_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_AF02CB48_A4EE_9D78_41E4_45AD3E04CA86_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_AF02CB48_A4EE_9D78_41E4_45AD3E04CA86.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "areas": [
       {
        "click": "this.setMediaBehaviour(this.playList_D29DC58C_DC86_C23A_41D8_C300D1799032, 0, this.panorama_AF02CB48_A4EE_9D78_41E4_45AD3E04CA86)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "hfov": 1.67,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 27,
           "width": 17,
           "url": "media/panorama_AF02CB48_A4EE_9D78_41E4_45AD3E04CA86_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -4.16,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -32.24
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_A8719C44_A4F2_EA3B_419D_E95999DECC44",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -4.16,
        "hfov": 1.67,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 55,
           "width": 35,
           "url": "media/panorama_AF02CB48_A4EE_9D78_41E4_45AD3E04CA86_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -32.24
       }
      ]
     },
     {
      "areas": [
       {
        "click": "this.setComponentVisibility(this.Container_84BC0FAB_A055_CABA_41D7_DB1AFFECA549, true, 0, null, null, false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "hfov": 1.8,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 28,
           "width": 17,
           "url": "media/panorama_AF02CB48_A4EE_9D78_41E4_45AD3E04CA86_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": 10.63,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -24.87
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_A85B67CC_A4F2_65CA_41D9_0B75F56C0BC7",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": 10.63,
        "hfov": 1.8,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 56,
           "width": 35,
           "url": "media/panorama_AF02CB48_A4EE_9D78_41E4_45AD3E04CA86_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -24.87
       }
      ]
     },
     {
      "areas": [
       {
        "click": "this.setComponentVisibility(this.Container_BC552B3E_A51F_EE46_41D6_EEDE0AC76317, true, 0, null, null, false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "hfov": 1.9,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 26,
           "width": 17,
           "url": "media/panorama_AF02CB48_A4EE_9D78_41E4_45AD3E04CA86_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": 11.19,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -15.88
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_A842F836_A4F1_EA46_41D4_B894CEC098B5",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": 11.19,
        "hfov": 1.9,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 52,
           "width": 35,
           "url": "media/panorama_AF02CB48_A4EE_9D78_41E4_45AD3E04CA86_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -15.88
       }
      ]
     },
     {
      "areas": [
       {
        "click": "this.setComponentVisibility(this.Container_BFDEA36F_A532_5EC5_41DB_E6405BC0E323, true, 0, null, null, false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "hfov": 1.77,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 26,
           "width": 16,
           "url": "media/panorama_AF02CB48_A4EE_9D78_41E4_45AD3E04CA86_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": 1.88,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -14.26
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_A9F51FA8_A4F6_664A_41A3_2E1C86E9E113",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": 1.88,
        "hfov": 1.77,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 53,
           "width": 32,
           "url": "media/panorama_AF02CB48_A4EE_9D78_41E4_45AD3E04CA86_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -14.26
       }
      ]
     },
     {
      "areas": [
       {
        "click": "this.setMediaBehaviour(this.playList_D29C658D_DC86_C23A_41A1_42B4D9BA48DA, 0, this.panorama_AF02CB48_A4EE_9D78_41E4_45AD3E04CA86)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "hfov": 1.87,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 27,
           "width": 17,
           "url": "media/panorama_AF02CB48_A4EE_9D78_41E4_45AD3E04CA86_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -1.5,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -19.55
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_A82FE821_A4F6_AA7A_4199_88C30097B1E9",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -1.5,
        "hfov": 1.87,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 55,
           "width": 35,
           "url": "media/panorama_AF02CB48_A4EE_9D78_41E4_45AD3E04CA86_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -19.55
       }
      ]
     }
    ]
   }
  ],
  "hfovMin": 60
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_AF02CB48_A4EE_9D78_41E4_45AD3E04CA86_camera",
  "initialPosition": {
   "hfov": 74,
   "yaw": -1.17,
   "class": "PanoramaCameraPosition",
   "pitch": -20.19
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_AF02CB48_A4EE_9D78_41E4_45AD3E04CA86_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_AF02CB48_A4EE_9D78_41E4_45AD3E04CA86"
   }
  ]
 },
 {
  "vfov": 132.36,
  "partial": false,
  "class": "Panorama",
  "hfovMax": 135,
  "id": "panorama_AF9D49D6_A4EE_FD68_41C5_EC976B7CB11B",
  "pitch": 0,
  "hfov": 360,
  "label": "PUNTO1 Tanque almacenamiento agua captada",
  "thumbnailUrl": "media/panorama_AF9D49D6_A4EE_FD68_41C5_EC976B7CB11B_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_AF9D49D6_A4EE_FD68_41C5_EC976B7CB11B_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 1499,
       "width": 4077,
       "url": "media/panorama_AF9D49D6_A4EE_FD68_41C5_EC976B7CB11B_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1182,
       "width": 3217,
       "url": "media/panorama_AF9D49D6_A4EE_FD68_41C5_EC976B7CB11B.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_B5170509_A4F2_7A4A_41C8_10415111DE59, {'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'pressedIconColor':'#888888','paddingRight':5,'backgroundColorDirection':'vertical','borderSize':0,'borderColor':'#000000','pressedIconWidth':20,'iconColor':'#000000','pressedIconHeight':20,'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','paddingTop':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'rollOverIconHeight':20,'iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','rollOverBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5}, this.ImageResource_B4447E69_A513_A6CA_41E1_A3E32C66B47C, null, null, null, null, false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "hfov": 4.89,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 48,
           "width": 27,
           "url": "media/panorama_AF9D49D6_A4EE_FD68_41C5_EC976B7CB11B_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -3.62,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -8.01
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_B4CC9140_A4F1_FA3A_41E1_B10832011668",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -3.62,
        "hfov": 4.89,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 97,
           "width": 55,
           "url": "media/panorama_AF9D49D6_A4EE_FD68_41C5_EC976B7CB11B_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -8.01
       }
      ]
     },
     {
      "rotationZ": 0,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 184,
         "width": 1024,
         "url": "media/popup_B5170509_A4F2_7A4A_41C8_10415111DE59_0_1.png",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "rotationY": 0,
      "hfov": 4.89,
      "yaw": -3.62,
      "class": "PopupPanoramaOverlay",
      "hideEasing": "cubic_out",
      "id": "popup_B5170509_A4F2_7A4A_41C8_10415111DE59",
      "popupMaxWidth": "50%",
      "rotationX": 0,
      "hideDuration": 500,
      "popupMaxHeight": "50%",
      "showEasing": "cubic_in",
      "showDuration": 500,
      "pitch": -8.01
     }
    ]
   }
  ],
  "hfovMin": 117
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_AF9D49D6_A4EE_FD68_41C5_EC976B7CB11B_camera",
  "initialPosition": {
   "hfov": 127,
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "playList_D29DC58C_DC86_C23A_41D8_C300D1799032",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_AF9D49D6_A4EE_FD68_41C5_EC976B7CB11B_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_AF9D49D6_A4EE_FD68_41C5_EC976B7CB11B"
   }
  ]
 },
 {
  "vfov": 156.12,
  "partial": false,
  "class": "Panorama",
  "hfovMax": 120,
  "id": "panorama_AF9A44E1_A4EE_EB28_41C2_79FDB6F349CC",
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_AF9A44E1_A4EE_EB28_41C2_79FDB6F349CC_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 1765,
       "width": 4070,
       "url": "media/panorama_AF9A44E1_A4EE_EB28_41C2_79FDB6F349CC_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1395,
       "width": 3217,
       "url": "media/panorama_AF9A44E1_A4EE_EB28_41C2_79FDB6F349CC.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_B4448BA2_A4FE_EE7E_41C4_BB35143F1B41, {'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'pressedIconColor':'#888888','paddingRight':5,'backgroundColorDirection':'vertical','borderSize':0,'borderColor':'#000000','pressedIconWidth':20,'iconColor':'#000000','pressedIconHeight':20,'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','paddingTop':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'rollOverIconHeight':20,'iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','rollOverBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5}, this.ImageResource_B569AF24_A4F2_A67A_41E0_230B721CBEA6, null, null, null, null, false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "hfov": 5.77,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 32,
           "width": 32,
           "url": "media/panorama_AF9A44E1_A4EE_EB28_41C2_79FDB6F349CC_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": 130.15,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -7
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "enabledInCardboard": true,
      "id": "overlay_ABA6460E_A4FE_6646_41DC_1C64885CC449",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": 130.15,
        "hfov": 5.77,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 65,
           "width": 65,
           "url": "media/panorama_AF9A44E1_A4EE_EB28_41C2_79FDB6F349CC_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -7
       }
      ]
     },
     {
      "rotationZ": 0,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 169,
         "width": 1024,
         "url": "media/popup_B4448BA2_A4FE_EE7E_41C4_BB35143F1B41_0_1.png",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "rotationY": 0,
      "hfov": 5.77,
      "yaw": 130.15,
      "class": "PopupPanoramaOverlay",
      "hideEasing": "cubic_out",
      "id": "popup_B4448BA2_A4FE_EE7E_41C4_BB35143F1B41",
      "popupMaxWidth": "50%",
      "rotationX": 0,
      "hideDuration": 500,
      "popupMaxHeight": "50%",
      "showEasing": "cubic_in",
      "showDuration": 500,
      "pitch": -7
     }
    ]
   }
  ],
  "hfov": 360,
  "label": "PUNTO 5 Tanque de almacenamiento agua potable",
  "thumbnailUrl": "media/panorama_AF9A44E1_A4EE_EB28_41C2_79FDB6F349CC_t.jpg",
  "hfovMin": 120
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_AF9A44E1_A4EE_EB28_41C2_79FDB6F349CC_camera",
  "initialPosition": {
   "yaw": 130.91,
   "class": "PanoramaCameraPosition",
   "pitch": -9.69
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "playList_D29C658D_DC86_C23A_41A1_42B4D9BA48DA",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_AF9A44E1_A4EE_EB28_41C2_79FDB6F349CC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_AF9A44E1_A4EE_EB28_41C2_79FDB6F349CC"
   }
  ]
 },
 {
  "levels": [
   {
    "height": 260,
    "width": 1474,
    "url": "media/zoomImage_D8E277CB_D78D_DE57_41E9_EF092843ECAA_0_0.png",
    "class": "ImageResourceLevel"
   },
   {
    "height": 180,
    "width": 1023,
    "url": "media/zoomImage_D8E277CB_D78D_DE57_41E9_EF092843ECAA_0_1.png",
    "class": "ImageResourceLevel"
   },
   {
    "height": 90,
    "width": 511,
    "url": "media/zoomImage_D8E277CB_D78D_DE57_41E9_EF092843ECAA_0_2.png",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_D8CC1740_D78A_DE51_41E7_831EE432798D",
  "class": "ImageResource"
 },
 {
  "duration": 500,
  "easing": "cubic_in",
  "id": "FadeInEffect_D8CC0740_D78A_DE51_41D1_DA512E67440C",
  "class": "FadeInEffect"
 },
 {
  "duration": 500,
  "easing": "cubic_out",
  "id": "FadeOutEffect_D8CC3740_D78A_DE51_41E2_8CC879962FD6",
  "class": "FadeOutEffect"
 },
 "this.popup_B4448BA2_A4FE_EE7E_41C4_BB35143F1B41",
 {
  "levels": [
   {
    "height": 199,
    "width": 1200,
    "url": "media/popup_B4448BA2_A4FE_EE7E_41C4_BB35143F1B41_0_0.png",
    "class": "ImageResourceLevel"
   },
   {
    "height": 169,
    "width": 1024,
    "url": "media/popup_B4448BA2_A4FE_EE7E_41C4_BB35143F1B41_0_1.png",
    "class": "ImageResourceLevel"
   },
   {
    "height": 84,
    "width": 512,
    "url": "media/popup_B4448BA2_A4FE_EE7E_41C4_BB35143F1B41_0_2.png",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_B569AF24_A4F2_A67A_41E0_230B721CBEA6",
  "class": "ImageResource"
 },
 "this.popup_B5170509_A4F2_7A4A_41C8_10415111DE59",
 {
  "levels": [
   {
    "height": 201,
    "width": 1115,
    "url": "media/popup_B5170509_A4F2_7A4A_41C8_10415111DE59_0_0.png",
    "class": "ImageResourceLevel"
   },
   {
    "height": 184,
    "width": 1024,
    "url": "media/popup_B5170509_A4F2_7A4A_41C8_10415111DE59_0_1.png",
    "class": "ImageResourceLevel"
   },
   {
    "height": 92,
    "width": 512,
    "url": "media/popup_B5170509_A4F2_7A4A_41C8_10415111DE59_0_2.png",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_B4447E69_A513_A6CA_41E1_A3E32C66B47C",
  "class": "ImageResource"
 }
], "children": [
 {
  "progressBorderSize": 0,
  "paddingRight": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarHeight": 10,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "minWidth": 100,
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadShadow": true,
  "toolTipPaddingTop": 4,
  "playbackBarRight": 0,
  "paddingLeft": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBorderRadius": 0,
  "playbackBarProgressBorderSize": 0,
  "progressBarBorderRadius": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarOpacity": 1,
  "progressBarBorderSize": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "paddingBottom": 0,
  "playbackBarProgressBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "toolTipShadowSpread": 0,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "toolTipPaddingBottom": 4,
  "transitionMode": "blending",
  "toolTipFontWeight": "normal",
  "toolTipTextShadowOpacity": 0,
  "toolTipFontSize": 12,
  "playbackBarHeadShadowHorizontalLength": 0,
  "paddingTop": 0,
  "toolTipFontColor": "#606060",
  "playbackBarBorderRadius": 0,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingRight": 6,
  "progressBarOpacity": 1,
  "shadow": false,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "class": "ViewerArea",
  "toolTipBorderRadius": 3,
  "progressBottom": 0,
  "borderSize": 0,
  "progressHeight": 10,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderRadius": 0,
  "progressLeft": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "height": "100%",
  "toolTipPaddingLeft": 6,
  "toolTipBorderColor": "#767676",
  "width": "100%",
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarBorderSize": 0,
  "playbackBarLeft": 0,
  "playbackBarHeadHeight": 15,
  "playbackBarBackgroundOpacity": 1,
  "toolTipBorderSize": 1,
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipOpacity": 1,
  "toolTipTextShadowBlurRadius": 3,
  "minHeight": 50,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadShadowColor": "#000000",
  "top": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadBorderSize": 0,
  "progressRight": 0,
  "playbackBarHeadOpacity": 1,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "id": "MainViewer",
  "borderRadius": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipShadowHorizontalLength": 0,
  "progressBackgroundOpacity": 1,
  "progressBarBorderColor": "#000000",
  "progressBorderColor": "#000000",
  "toolTipFontFamily": "Arial",
  "playbackBarBottom": 5,
  "left": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipFontStyle": "normal"
 },
 {
  "verticalAlign": "top",
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "class": "Container",
  "paddingRight": 0,
  "borderSize": 0,
  "width": "100%",
  "height": "100%",
  "minWidth": 1,
  "scrollBarOpacity": 0.5,
  "gap": 10,
  "horizontalAlign": "left",
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "paddingLeft": 0,
  "scrollBarMargin": 2,
  "minHeight": 1,
  "top": "0%",
  "visible": false,
  "paddingBottom": 0,
  "backgroundColorDirection": "vertical",
  "id": "Container_84BC0FAB_A055_CABA_41D7_DB1AFFECA549",
  "borderRadius": 0,
  "backgroundOpacity": 0.3,
  "layout": "absolute",
  "paddingTop": 0,
  "left": "0%",
  "overflow": "scroll",
  "backgroundColorRatios": [
   0,
   1
  ],
  "scrollBarColor": "#000000",
  "children": [
   {
    "verticalAlign": "top",
    "shadow": false,
    "scrollBarVisible": "rollOver",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "class": "Container",
    "paddingRight": 0,
    "borderSize": 0,
    "minWidth": 1,
    "scrollBarOpacity": 0.5,
    "gap": 10,
    "horizontalAlign": "left",
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "paddingLeft": 0,
    "scrollBarMargin": 2,
    "minHeight": 1,
    "top": "12%",
    "overflow": "scroll",
    "paddingBottom": 0,
    "backgroundColorDirection": "vertical",
    "id": "Container_84F9BCED_A054_4EBE_41A3_E989FD5C2AEC",
    "borderRadius": 0,
    "bottom": "12%",
    "backgroundOpacity": 0.3,
    "layout": "absolute",
    "paddingTop": 0,
    "left": "12%",
    "backgroundColorRatios": [
     0,
     1
    ],
    "scrollBarColor": "#000000",
    "right": "12%",
    "children": [
     {
      "shadow": false,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "class": "WebFrame",
      "paddingRight": 0,
      "borderSize": 0,
      "width": "99.762%",
      "height": "99.571%",
      "minWidth": 1,
      "url": "https://my.matterport.com/show/?m=WiNQ6XHJge4\n\n",
      "paddingLeft": 0,
      "minHeight": 1,
      "top": "0%",
      "paddingBottom": 0,
      "backgroundColorDirection": "vertical",
      "id": "WebFrame_83E49C37_A053_CDAA_4196_3B0B6FD90B04",
      "borderRadius": 0,
      "scrollEnabled": true,
      "backgroundOpacity": 1,
      "paddingTop": 0,
      "left": "0%",
      "backgroundColorRatios": [
       0
      ],
      "insetBorder": false
     },
     {
      "verticalAlign": "middle",
      "shadow": false,
      "class": "IconButton",
      "paddingRight": 0,
      "mode": "push",
      "borderSize": 0,
      "width": 80,
      "maxHeight": 326,
      "height": 90,
      "minWidth": 1,
      "transparencyActive": false,
      "iconURL": "skin/IconButton_8693D606_A1B4_5D6A_41DD_78B70B29F1AA.png",
      "horizontalAlign": "center",
      "paddingLeft": 0,
      "click": "this.setComponentVisibility(this.Container_84BC0FAB_A055_CABA_41D7_DB1AFFECA549, false, 0, null, null, false)",
      "maxWidth": 480,
      "minHeight": 1,
      "top": "0%",
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_8693D606_A1B4_5D6A_41DD_78B70B29F1AA",
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "right": "0%"
     }
    ]
   }
  ]
 },
 {
  "verticalAlign": "top",
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "class": "Container",
  "paddingRight": 0,
  "borderSize": 0,
  "width": "100%",
  "height": "100%",
  "minWidth": 1,
  "scrollBarOpacity": 0.5,
  "gap": 10,
  "horizontalAlign": "left",
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "paddingLeft": 0,
  "scrollBarMargin": 2,
  "minHeight": 1,
  "top": "0%",
  "visible": false,
  "paddingBottom": 0,
  "backgroundColorDirection": "vertical",
  "id": "Container_8AD7F988_A1CC_B765_41DD_EDC28684F2E5",
  "borderRadius": 0,
  "backgroundOpacity": 0.3,
  "layout": "absolute",
  "paddingTop": 0,
  "left": "0%",
  "overflow": "scroll",
  "backgroundColorRatios": [
   0,
   1
  ],
  "scrollBarColor": "#000000",
  "children": [
   {
    "verticalAlign": "top",
    "shadow": false,
    "scrollBarVisible": "rollOver",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "class": "Container",
    "paddingRight": 0,
    "borderSize": 0,
    "minWidth": 1,
    "scrollBarOpacity": 0.5,
    "gap": 10,
    "horizontalAlign": "left",
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "paddingLeft": 0,
    "scrollBarMargin": 2,
    "minHeight": 1,
    "top": "12%",
    "overflow": "scroll",
    "paddingBottom": 0,
    "backgroundColorDirection": "vertical",
    "id": "Container_8ADE6DAE_A1CC_4EBA_41D6_E30D086C7728",
    "borderRadius": 0,
    "bottom": "12%",
    "backgroundOpacity": 0.3,
    "layout": "absolute",
    "paddingTop": 0,
    "left": "12%",
    "backgroundColorRatios": [
     0,
     1
    ],
    "scrollBarColor": "#000000",
    "right": "12%",
    "children": [
     {
      "shadow": false,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "class": "WebFrame",
      "paddingRight": 0,
      "borderSize": 0,
      "width": "100%",
      "height": "100%",
      "minWidth": 1,
      "url": "//www.youtube.com/embed/CiI-n9gjHQw",
      "paddingLeft": 0,
      "minHeight": 1,
      "top": "0%",
      "paddingBottom": 0,
      "backgroundColorDirection": "vertical",
      "id": "WebFrame_8A09E3A6_A1CC_DAAA_41BA_F2593BBA146B",
      "borderRadius": 0,
      "scrollEnabled": true,
      "backgroundOpacity": 1,
      "paddingTop": 0,
      "left": "0%",
      "backgroundColorRatios": [
       0
      ],
      "insetBorder": false
     },
     {
      "verticalAlign": "middle",
      "shadow": false,
      "class": "IconButton",
      "paddingRight": 0,
      "mode": "push",
      "borderSize": 0,
      "width": 80,
      "maxHeight": 326,
      "height": 90,
      "minWidth": 1,
      "transparencyActive": false,
      "iconURL": "skin/IconButton_8A42DDD9_A1D4_CEE6_41D4_BA87640A8966.png",
      "horizontalAlign": "center",
      "paddingLeft": 0,
      "click": "this.setComponentVisibility(this.Container_8AD7F988_A1CC_B765_41DD_EDC28684F2E5, false, 0, null, null, false)",
      "maxWidth": 480,
      "minHeight": 1,
      "top": "0%",
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_8A42DDD9_A1D4_CEE6_41D4_BA87640A8966",
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "right": "0%"
     }
    ]
   }
  ]
 },
 {
  "verticalAlign": "middle",
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "class": "Container",
  "paddingRight": 0,
  "borderSize": 0,
  "width": "100%",
  "scrollBarOpacity": 0.5,
  "minWidth": 1,
  "gap": 10,
  "horizontalAlign": "center",
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "paddingLeft": 0,
  "minHeight": 1,
  "top": "0%",
  "paddingBottom": 0,
  "bottom": "75.11%",
  "id": "Container_AF32D685_A49C_89E2_41E2_3BD3949A5D70",
  "borderRadius": 0,
  "layout": "horizontal",
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "left": "0%",
  "overflow": "scroll",
  "scrollBarColor": "#000000",
  "children": [
   {
    "verticalAlign": "top",
    "shadow": false,
    "class": "Container",
    "paddingRight": 0,
    "borderSize": 0,
    "width": "32.871%",
    "height": "80%",
    "scrollBarOpacity": 0.5,
    "minWidth": 1,
    "gap": 10,
    "horizontalAlign": "left",
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "paddingLeft": 0,
    "minHeight": 1,
    "paddingBottom": 0,
    "id": "Container_A94C6D9B_A4BD_FBE6_41E2_07A7AABD2447",
    "borderRadius": 0,
    "layout": "horizontal",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "children": [
     {
      "verticalAlign": "middle",
      "shadow": false,
      "class": "Image",
      "paddingRight": 0,
      "borderSize": 0,
      "width": 223,
      "maxHeight": 79,
      "height": 61,
      "minWidth": 1,
      "url": "skin/Image_DE924A75_D297_3901_41E4_DFAF333F3F5B.png",
      "horizontalAlign": "center",
      "scaleMode": "fit_inside",
      "maxWidth": 536,
      "paddingLeft": 0,
      "minHeight": 1,
      "paddingBottom": 0,
      "id": "Image_DE924A75_D297_3901_41E4_DFAF333F3F5B",
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "paddingTop": 0
     },
     {
      "verticalAlign": "middle",
      "shadow": false,
      "class": "IconButton",
      "paddingRight": 0,
      "mode": "push",
      "borderSize": 0,
      "width": 60,
      "maxHeight": 196,
      "height": 60,
      "minWidth": 1,
      "transparencyActive": false,
      "iconURL": "skin/IconButton_DED757AF_D291_3701_41DD_377FAE800F07.png",
      "horizontalAlign": "center",
      "paddingLeft": 0,
      "click": "this.setComponentVisibility(this.Container_8AD7F988_A1CC_B765_41DD_EDC28684F2E5, true, 0, null, null, false)",
      "maxWidth": 196,
      "minHeight": 1,
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_DED757AF_D291_3701_41DD_377FAE800F07",
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "paddingTop": 0
     }
    ],
    "scrollBarVisible": "rollOver"
   },
   {
    "verticalAlign": "top",
    "shadow": false,
    "class": "Container",
    "paddingRight": 0,
    "borderSize": 0,
    "width": "33%",
    "height": "80%",
    "scrollBarOpacity": 0.5,
    "minWidth": 1,
    "gap": 10,
    "horizontalAlign": "center",
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "paddingLeft": 0,
    "minHeight": 1,
    "paddingBottom": 0,
    "id": "Container_A8BA2680_A49D_89E2_41C8_A480C455C6D4",
    "borderRadius": 0,
    "layout": "horizontal",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "children": [
     {
      "verticalAlign": "middle",
      "shadow": false,
      "class": "IconButton",
      "paddingRight": 0,
      "mode": "push",
      "borderSize": 0,
      "width": 60,
      "maxHeight": 131,
      "height": 60,
      "minWidth": 1,
      "transparencyActive": false,
      "iconURL": "skin/IconButton_82A8BA13_A054_556A_41D2_81F571B14E26.png",
      "horizontalAlign": "center",
      "paddingLeft": 0,
      "click": "this.showPopupImage(this.ImageResource_D8CC1740_D78A_DE51_41E7_831EE432798D, null, '60%', '60%', this.FadeInEffect_D8CC0740_D78A_DE51_41D1_DA512E67440C, this.FadeOutEffect_D8CC3740_D78A_DE51_41E2_8CC879962FD6, {'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'pressedIconColor':'#888888','paddingRight':5,'backgroundColorDirection':'vertical','borderSize':0,'borderColor':'#000000','pressedIconWidth':20,'iconColor':'#000000','pressedIconHeight':20,'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','paddingTop':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'rollOverIconHeight':20,'iconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'paddingLeft':5,'rollOverIconColor':'#666666','rollOverBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5}, null, null, false)",
      "maxWidth": 131,
      "minHeight": 1,
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_82A8BA13_A054_556A_41D2_81F571B14E26",
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "paddingTop": 0
     },
     {
      "verticalAlign": "middle",
      "shadow": false,
      "class": "IconButton",
      "paddingRight": 0,
      "mode": "push",
      "borderSize": 0,
      "width": 60,
      "maxHeight": 131,
      "height": 60,
      "minWidth": 1,
      "transparencyActive": false,
      "iconURL": "skin/IconButton_81504482_A054_5D6A_41E2_E745ED39AB62.png",
      "horizontalAlign": "center",
      "paddingLeft": 0,
      "click": "this.mainPlayList.set('selectedIndex', 0)",
      "maxWidth": 131,
      "minHeight": 1,
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_81504482_A054_5D6A_41E2_E745ED39AB62",
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "paddingTop": 0
     }
    ],
    "scrollBarVisible": "rollOver"
   },
   {
    "verticalAlign": "top",
    "shadow": false,
    "class": "Container",
    "paddingRight": 0,
    "borderSize": 0,
    "width": "33%",
    "height": "80%",
    "scrollBarOpacity": 0.5,
    "minWidth": 1,
    "gap": 10,
    "horizontalAlign": "right",
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "paddingLeft": 0,
    "minHeight": 1,
    "paddingBottom": 0,
    "id": "Container_A9295707_A4BD_88EE_41E3_497D1B1162A8",
    "borderRadius": 0,
    "layout": "horizontal",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "overflow": "scroll",
    "children": [
     {
      "verticalAlign": "middle",
      "shadow": false,
      "class": "IconButton",
      "paddingRight": 0,
      "mode": "push",
      "borderSize": 0,
      "width": 223,
      "maxHeight": 65,
      "height": 61,
      "minWidth": 1,
      "transparencyActive": false,
      "iconURL": "skin/IconButton_AAC3E829_A46E_2EC0_41CC_0356FAE221A2.png",
      "horizontalAlign": "center",
      "paddingLeft": 0,
      "click": "this.openLink(\"http://grafoexpress.com/puertas_abiertas_360_menu\", \"_top\")",
      "maxWidth": 435,
      "minHeight": 1,
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_AAC3E829_A46E_2EC0_41CC_0356FAE221A2",
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "paddingTop": 0
     }
    ],
    "scrollBarVisible": "rollOver"
   }
  ]
 },
 {
  "verticalAlign": "top",
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "class": "Container",
  "paddingRight": 0,
  "borderSize": 0,
  "width": "100%",
  "height": "100%",
  "minWidth": 1,
  "scrollBarOpacity": 0.5,
  "gap": 10,
  "horizontalAlign": "left",
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "paddingLeft": 0,
  "scrollBarMargin": 2,
  "minHeight": 1,
  "top": "0%",
  "visible": false,
  "paddingBottom": 0,
  "backgroundColorDirection": "vertical",
  "id": "Container_BC552B3E_A51F_EE46_41D6_EEDE0AC76317",
  "borderRadius": 0,
  "backgroundOpacity": 0.3,
  "layout": "absolute",
  "paddingTop": 0,
  "left": "0%",
  "overflow": "scroll",
  "backgroundColorRatios": [
   0,
   1
  ],
  "scrollBarColor": "#000000",
  "children": [
   {
    "verticalAlign": "top",
    "shadow": false,
    "scrollBarVisible": "rollOver",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "class": "Container",
    "paddingRight": 0,
    "borderSize": 0,
    "minWidth": 1,
    "scrollBarOpacity": 0.5,
    "gap": 10,
    "horizontalAlign": "left",
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "paddingLeft": 0,
    "scrollBarMargin": 2,
    "minHeight": 1,
    "top": "12%",
    "overflow": "scroll",
    "paddingBottom": 0,
    "backgroundColorDirection": "vertical",
    "id": "Container_BFB22C0C_A511_EA4A_41DB_EC07DAE0B063",
    "borderRadius": 0,
    "bottom": "12%",
    "backgroundOpacity": 0.3,
    "layout": "absolute",
    "paddingTop": 0,
    "left": "12%",
    "backgroundColorRatios": [
     0,
     1
    ],
    "scrollBarColor": "#000000",
    "right": "12%",
    "children": [
     {
      "shadow": false,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "class": "WebFrame",
      "paddingRight": 0,
      "borderSize": 0,
      "width": "100%",
      "height": "100%",
      "minWidth": 1,
      "url": "https://my.matterport.com/show/?m=hmTL6iBjoMX",
      "paddingLeft": 0,
      "minHeight": 1,
      "top": "0%",
      "paddingBottom": 0,
      "backgroundColorDirection": "vertical",
      "id": "WebFrame_BCFA7A94_A512_6E5A_41D7_3BF16E7B0D6C",
      "borderRadius": 0,
      "scrollEnabled": true,
      "backgroundOpacity": 1,
      "paddingTop": 0,
      "left": "0%",
      "backgroundColorRatios": [
       0
      ],
      "insetBorder": false
     },
     {
      "verticalAlign": "middle",
      "shadow": false,
      "class": "IconButton",
      "paddingRight": 0,
      "mode": "push",
      "borderSize": 0,
      "width": 80,
      "maxHeight": 326,
      "height": 90,
      "minWidth": 1,
      "transparencyActive": false,
      "iconURL": "skin/IconButton_BFC9EFE2_A512_65FE_41E0_B61A4E45FE84.png",
      "horizontalAlign": "center",
      "paddingLeft": 0,
      "click": "this.setComponentVisibility(this.Container_BC552B3E_A51F_EE46_41D6_EEDE0AC76317, false, 0, null, null, false)",
      "maxWidth": 480,
      "minHeight": 1,
      "top": "0%",
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_BFC9EFE2_A512_65FE_41E0_B61A4E45FE84",
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "right": "0%"
     }
    ]
   }
  ]
 },
 {
  "verticalAlign": "top",
  "shadow": false,
  "scrollBarVisible": "rollOver",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "class": "Container",
  "paddingRight": 0,
  "borderSize": 0,
  "width": "100%",
  "height": "100%",
  "minWidth": 1,
  "scrollBarOpacity": 0.5,
  "gap": 10,
  "horizontalAlign": "left",
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "paddingLeft": 0,
  "scrollBarMargin": 2,
  "minHeight": 1,
  "top": "0%",
  "visible": false,
  "paddingBottom": 0,
  "backgroundColorDirection": "vertical",
  "id": "Container_BFDEA36F_A532_5EC5_41DB_E6405BC0E323",
  "borderRadius": 0,
  "backgroundOpacity": 0.3,
  "layout": "absolute",
  "paddingTop": 0,
  "left": "0%",
  "overflow": "scroll",
  "backgroundColorRatios": [
   0,
   1
  ],
  "scrollBarColor": "#000000",
  "children": [
   {
    "verticalAlign": "top",
    "shadow": false,
    "scrollBarVisible": "rollOver",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "class": "Container",
    "paddingRight": 0,
    "borderSize": 0,
    "minWidth": 1,
    "scrollBarOpacity": 0.5,
    "gap": 10,
    "horizontalAlign": "left",
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "paddingLeft": 0,
    "scrollBarMargin": 2,
    "minHeight": 1,
    "top": "12%",
    "overflow": "scroll",
    "paddingBottom": 0,
    "backgroundColorDirection": "vertical",
    "id": "Container_BFF60417_A532_7A45_41D9_3EF6FBE262FB",
    "borderRadius": 0,
    "bottom": "12%",
    "backgroundOpacity": 0.3,
    "layout": "absolute",
    "paddingTop": 0,
    "left": "12%",
    "backgroundColorRatios": [
     0,
     1
    ],
    "scrollBarColor": "#000000",
    "right": "12%",
    "children": [
     {
      "shadow": false,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "class": "WebFrame",
      "paddingRight": 0,
      "borderSize": 0,
      "width": "100%",
      "height": "100%",
      "minWidth": 1,
      "url": "https://my.matterport.com/show/?m=c9smzyrv56N\n",
      "paddingLeft": 0,
      "minHeight": 1,
      "top": "0%",
      "paddingBottom": 0,
      "backgroundColorDirection": "vertical",
      "id": "WebFrame_BFD8E65A_A536_A6CE_41A4_F0DD35D626F3",
      "borderRadius": 0,
      "scrollEnabled": true,
      "backgroundOpacity": 1,
      "paddingTop": 0,
      "left": "0%",
      "backgroundColorRatios": [
       0
      ],
      "insetBorder": false
     },
     {
      "verticalAlign": "middle",
      "shadow": false,
      "class": "IconButton",
      "paddingRight": 0,
      "mode": "push",
      "borderSize": 0,
      "width": 80,
      "maxHeight": 326,
      "height": 90,
      "minWidth": 1,
      "transparencyActive": false,
      "iconURL": "skin/IconButton_BF377811_A536_6A5A_41D9_C163F0763F48.png",
      "horizontalAlign": "center",
      "paddingLeft": 0,
      "click": "this.setComponentVisibility(this.Container_BFDEA36F_A532_5EC5_41DB_E6405BC0E323, false, 0, null, null, false)",
      "maxWidth": 480,
      "minHeight": 1,
      "top": "0%",
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_BF377811_A536_6A5A_41D9_C163F0763F48",
      "borderRadius": 0,
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "right": "0%"
     }
    ]
   }
  ]
 },
 {
  "shadow": false,
  "backgroundColor": [
   "#000000"
  ],
  "class": "UIComponent",
  "paddingRight": 0,
  "borderSize": 0,
  "minWidth": 0,
  "paddingLeft": 0,
  "minHeight": 0,
  "top": 0,
  "visible": false,
  "paddingBottom": 0,
  "backgroundColorDirection": "vertical",
  "id": "veilPopupPanorama",
  "borderRadius": 0,
  "bottom": 0,
  "backgroundOpacity": 0.55,
  "showEffect": {
   "duration": 350,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "paddingTop": 0,
  "left": 0,
  "backgroundColorRatios": [
   0
  ],
  "right": 0
 },
 {
  "shadow": false,
  "backgroundColor": [],
  "class": "ZoomImage",
  "paddingRight": 0,
  "borderSize": 0,
  "minWidth": 0,
  "paddingLeft": 0,
  "scaleMode": "custom",
  "minHeight": 0,
  "top": 0,
  "visible": false,
  "paddingBottom": 0,
  "backgroundColorDirection": "vertical",
  "id": "zoomImagePopupPanorama",
  "borderRadius": 0,
  "bottom": 0,
  "backgroundOpacity": 1,
  "paddingTop": 0,
  "left": 0,
  "backgroundColorRatios": [],
  "right": 0
 },
 {
  "verticalAlign": "middle",
  "shadow": false,
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "class": "CloseButton",
  "mode": "push",
  "borderSize": 0,
  "paddingRight": 5,
  "iconHeight": 20,
  "iconBeforeLabel": true,
  "minWidth": 0,
  "fontFamily": "Arial",
  "iconWidth": 20,
  "fontSize": 12,
  "fontStyle": "normal",
  "horizontalAlign": "center",
  "fontColor": "#FFFFFF",
  "paddingLeft": 5,
  "gap": 5,
  "fontWeight": "normal",
  "minHeight": 0,
  "iconColor": "#000000",
  "top": 10,
  "iconLineWidth": 5,
  "rollOverIconColor": "#666666",
  "cursor": "hand",
  "visible": false,
  "paddingBottom": 5,
  "borderColor": "#000000",
  "backgroundColorDirection": "vertical",
  "id": "closeButtonPopupPanorama",
  "borderRadius": 0,
  "shadowColor": "#000000",
  "backgroundOpacity": 0.3,
  "showEffect": {
   "duration": 350,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "layout": "horizontal",
  "shadowSpread": 1,
  "paddingTop": 5,
  "label": "",
  "textDecoration": "none",
  "shadowBlurRadius": 6,
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "pressedIconColor": "#888888",
  "right": 10
 }
], 
 "verticalAlign": "top",
 "shadow": false,
 "mouseWheelEnabled": true,
 "scrollBarVisible": "rollOver",
 "class": "Player",
 "paddingRight": 0,
 "borderSize": 0,
 "width": "100%",
 "height": "100%",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "horizontalAlign": "left",
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "minHeight": 20,
 "vrPolyfillScale": 0.5,
 "scripts": {
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "existsKey": function(key){  return key in window; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getKey": function(key){  return window[key]; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "registerKey": function(key, value){  window[key] = value; },
  "unregisterKey": function(key){  delete window[key]; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } }
 },
 "paddingBottom": 0,
 "id": "rootPlayer",
 "borderRadius": 0,
 "backgroundPreloadEnabled": true,
 "layout": "absolute",
 "paddingTop": 0,
 "overflow": "visible",
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "scrollBarColor": "#000000"
})