TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "vfov": 180,
  "partial": false,
  "class": "Panorama",
  "hfovMax": 120,
  "id": "panorama_8210080E_A07C_557A_41D9_068F34FB281A",
  "pitch": 0,
  "hfov": 360,
  "label": "extraccion foto aerea",
  "thumbnailUrl": "media/panorama_8210080E_A07C_557A_41D9_068F34FB281A_t.jpg",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_8210080E_A07C_557A_41D9_068F34FB281A_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_8210080E_A07C_557A_41D9_068F34FB281A_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_8210080E_A07C_557A_41D9_068F34FB281A.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "hfov": 2.75,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 44,
           "width": 31,
           "url": "media/panorama_8210080E_A07C_557A_41D9_068F34FB281A_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -0.42,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -38.22
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_80A1BAF6_A074_4AAA_41A4_F47118BB8EBA",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -0.42,
        "hfov": 2.75,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 88,
           "width": 62,
           "url": "media/panorama_8210080E_A07C_557A_41D9_068F34FB281A_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -38.22
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
        "hfov": 3.33,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 44,
           "width": 31,
           "url": "media/panorama_8210080E_A07C_557A_41D9_068F34FB281A_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -2.52,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -17.59
       }
      ],
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_80BD5F40_A075_CBE6_41E3_D33A8F7D68E3",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -2.52,
        "hfov": 3.33,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 88,
           "width": 62,
           "url": "media/panorama_8210080E_A07C_557A_41D9_068F34FB281A_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -17.59
       }
      ]
     },
     {
      "areas": [
       {
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "hfov": 3.24,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 44,
           "width": 31,
           "url": "media/panorama_8210080E_A07C_557A_41D9_068F34FB281A_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -28.97,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -22.14
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_80B5D2F3_A074_BAAB_41E0_4BEBB8469101",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -28.97,
        "hfov": 3.24,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 88,
           "width": 62,
           "url": "media/panorama_8210080E_A07C_557A_41D9_068F34FB281A_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -22.14
       }
      ]
     },
     {
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_8A6111E8_A1DC_D6A6_41E3_153690EA2D27, {'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingRight':5,'iconColor':'#000000','borderSize':0,'paddingLeft':5,'paddingBottom':5,'borderColor':'#000000','pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','paddingTop':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'rollOverIconHeight':20,'iconWidth':20,'rollOverIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverIconColor':'#666666','rollOverBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5}, this.ImageResource_8A53B53B_A1DC_5F9A_41C3_F406FE7C8143, null, null, null, null, false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "hfov": 3.41,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 44,
           "width": 31,
           "url": "media/panorama_8210080E_A07C_557A_41D9_068F34FB281A_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -14.4,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -12.58
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_80890A81_A074_B566_419D_FC78A64C0962",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -14.4,
        "hfov": 3.41,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 88,
           "width": 62,
           "url": "media/panorama_8210080E_A07C_557A_41D9_068F34FB281A_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -12.58
       }
      ]
     },
     {
      "rotationZ": 0,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 245,
         "width": 1024,
         "url": "media/popup_8A6111E8_A1DC_D6A6_41E3_153690EA2D27_0_1.png",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "rotationY": 0,
      "hfov": 3.41,
      "yaw": -14.4,
      "class": "PopupPanoramaOverlay",
      "hideEasing": "cubic_out",
      "id": "popup_8A6111E8_A1DC_D6A6_41E3_153690EA2D27",
      "popupMaxWidth": "70%",
      "rotationX": 0,
      "hideDuration": 500,
      "popupMaxHeight": "70%",
      "showEasing": "cubic_in",
      "showDuration": 500,
      "pitch": -12.58
     }
    ]
   }
  ],
  "hfovMin": 63
 },
 {
  "gyroscopeVerticalDraggingEnabled": true,
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true,
  "class": "PanoramaPlayer",
  "preloadEnabled": false
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_8210080E_A07C_557A_41D9_068F34FB281A_camera",
  "initialPosition": {
   "hfov": 120,
   "yaw": -10.55,
   "class": "PanoramaCameraPosition",
   "pitch": -13.95
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 130.93,
  "partial": false,
  "class": "Panorama",
  "hfovMax": 120,
  "id": "panorama_BF0EE1F7_A07C_76AA_41E1_C3F4AAA100D6",
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_BF0EE1F7_A07C_76AA_41E1_C3F4AAA100D6_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 1477,
       "width": 4061,
       "url": "media/panorama_BF0EE1F7_A07C_76AA_41E1_C3F4AAA100D6_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1170,
       "width": 3217,
       "url": "media/panorama_BF0EE1F7_A07C_76AA_41E1_C3F4AAA100D6.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_8F1B581F_A1CC_F59B_41E2_37BE01E8D932, {'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingRight':5,'iconColor':'#000000','borderSize':0,'paddingLeft':5,'paddingBottom':5,'borderColor':'#000000','pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','paddingTop':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'rollOverIconHeight':20,'iconWidth':20,'rollOverIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverIconColor':'#666666','rollOverBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5}, null, null, null, null, null, false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "hfov": 2.83,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 19,
           "width": 16,
           "url": "media/panorama_BF0EE1F7_A07C_76AA_41E1_C3F4AAA100D6_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -7.47,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 13.54
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_8DDB1626_A1CC_5DAA_41CA_447CBA82D458",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -7.47,
        "hfov": 2.83,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 38,
           "width": 32,
           "url": "media/panorama_BF0EE1F7_A07C_76AA_41E1_C3F4AAA100D6_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": 13.54
       }
      ]
     },
     {
      "rotationZ": 0,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 275,
         "width": 909,
         "url": "media/popup_8F1B581F_A1CC_F59B_41E2_37BE01E8D932_0_0.png",
         "class": "ImageResourceLevel"
        },
        {
         "height": 154,
         "width": 512,
         "url": "media/popup_8F1B581F_A1CC_F59B_41E2_37BE01E8D932_0_1.png",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "rotationY": 0,
      "hfov": 2.83,
      "yaw": -7.47,
      "class": "PopupPanoramaOverlay",
      "hideEasing": "cubic_out",
      "id": "popup_8F1B581F_A1CC_F59B_41E2_37BE01E8D932",
      "popupMaxWidth": "50%",
      "rotationX": 0,
      "hideDuration": 500,
      "popupMaxHeight": "50%",
      "showEasing": "cubic_in",
      "showDuration": 500,
      "pitch": 13.54
     }
    ]
   }
  ],
  "hfov": 360,
  "label": "extraccion punto 2",
  "thumbnailUrl": "media/panorama_BF0EE1F7_A07C_76AA_41E1_C3F4AAA100D6_t.jpg",
  "hfovMin": 60
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_BF0EE1F7_A07C_76AA_41E1_C3F4AAA100D6_camera",
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "class": "PanoramaCamera"
 },
 {
  "vfov": 129.01,
  "partial": false,
  "class": "Panorama",
  "hfovMax": 120,
  "id": "panorama_BF0397B1_A07C_7AA7_41D2_EB94C36D4492",
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_BF0397B1_A07C_7AA7_41D2_EB94C36D4492_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 1461,
       "width": 4077,
       "url": "media/panorama_BF0397B1_A07C_7AA7_41D2_EB94C36D4492_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1152,
       "width": 3217,
       "url": "media/panorama_BF0397B1_A07C_7AA7_41D2_EB94C36D4492.jpeg",
       "class": "ImageResourceLevel"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "areas": [
       {
        "click": "this.showPopupPanoramaOverlay(this.popup_8AD1133C_A1D5_DB9E_41E2_D5363FD75AF1, {'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingRight':5,'iconColor':'#000000','borderSize':0,'paddingLeft':5,'paddingBottom':5,'borderColor':'#000000','pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','paddingTop':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'rollOverIconHeight':20,'iconWidth':20,'rollOverIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverIconColor':'#666666','rollOverBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5}, null, null, null, null, null, false)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "maps": [
       {
        "hfov": 2.79,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 23,
           "width": 15,
           "url": "media/panorama_BF0397B1_A07C_7AA7_41D2_EB94C36D4492_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "yaw": -65.87,
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -0.97
       }
      ],
      "enabledInCardboard": true,
      "rollOverDisplay": false,
      "useHandCursor": true,
      "id": "overlay_8B89C505_A1D4_7F6F_41E2_0FC974C8B552",
      "class": "HotspotPanoramaOverlay",
      "items": [
       {
        "yaw": -65.87,
        "hfov": 2.79,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 47,
           "width": 31,
           "url": "media/panorama_BF0397B1_A07C_7AA7_41D2_EB94C36D4492_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ]
        },
        "pitch": -0.97
       }
      ]
     },
     {
      "rotationZ": 0,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 275,
         "width": 802,
         "url": "media/popup_8AD1133C_A1D5_DB9E_41E2_D5363FD75AF1_0_0.png",
         "class": "ImageResourceLevel"
        },
        {
         "height": 175,
         "width": 512,
         "url": "media/popup_8AD1133C_A1D5_DB9E_41E2_D5363FD75AF1_0_1.png",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "rotationY": 0,
      "hfov": 2.79,
      "yaw": -65.87,
      "class": "PopupPanoramaOverlay",
      "hideEasing": "cubic_out",
      "id": "popup_8AD1133C_A1D5_DB9E_41E2_D5363FD75AF1",
      "popupMaxWidth": "50%",
      "rotationX": 0,
      "hideDuration": 500,
      "popupMaxHeight": "50%",
      "showEasing": "cubic_in",
      "showDuration": 500,
      "pitch": -0.97
     }
    ]
   }
  ],
  "hfov": 360,
  "label": "extraccion punto 3",
  "thumbnailUrl": "media/panorama_BF0397B1_A07C_7AA7_41D2_EB94C36D4492_t.jpg",
  "hfovMin": 60
 },
 {
  "automaticZoomSpeed": 10,
  "id": "panorama_BF0397B1_A07C_7AA7_41D2_EB94C36D4492_camera",
  "initialPosition": {
   "yaw": -59.26,
   "class": "PanoramaCameraPosition",
   "pitch": -1.09
  },
  "class": "PanoramaCamera"
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_8210080E_A07C_557A_41D9_068F34FB281A_camera",
    "media": "this.panorama_8210080E_A07C_557A_41D9_068F34FB281A",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_BF0EE1F7_A07C_76AA_41E1_C3F4AAA100D6_camera",
    "media": "this.panorama_BF0EE1F7_A07C_76AA_41E1_C3F4AAA100D6",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 0)",
    "camera": "this.panorama_BF0397B1_A07C_7AA7_41D2_EB94C36D4492_camera",
    "media": "this.panorama_BF0397B1_A07C_7AA7_41D2_EB94C36D4492",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   }
  ]
 },
 {
  "levels": [
   {
    "height": 221,
    "width": 1055,
    "url": "media/zoomImage_A2ED7EF8_AEBB_90F6_41CE_DEC0EE355684_0_0.png",
    "class": "ImageResourceLevel"
   },
   {
    "height": 214,
    "width": 1024,
    "url": "media/zoomImage_A2ED7EF8_AEBB_90F6_41CE_DEC0EE355684_0_1.png",
    "class": "ImageResourceLevel"
   },
   {
    "height": 107,
    "width": 512,
    "url": "media/zoomImage_A2ED7EF8_AEBB_90F6_41CE_DEC0EE355684_0_2.png",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_A26191B8_AEBA_B175_41D7_C17CAE616E8A",
  "class": "ImageResource"
 },
 {
  "duration": 500,
  "id": "FadeInEffect_A26181B8_AEBA_B175_41BC_E0F264D4B331",
  "class": "FadeInEffect",
  "easing": "cubic_in"
 },
 {
  "duration": 500,
  "id": "FadeOutEffect_A261B1B8_AEBA_B175_41DC_31124540F3CE",
  "class": "FadeOutEffect",
  "easing": "cubic_out"
 },
 "this.popup_8A6111E8_A1DC_D6A6_41E3_153690EA2D27",
 {
  "levels": [
   {
    "height": 411,
    "width": 1716,
    "url": "media/popup_8A6111E8_A1DC_D6A6_41E3_153690EA2D27_0_0.png",
    "class": "ImageResourceLevel"
   },
   {
    "height": 245,
    "width": 1024,
    "url": "media/popup_8A6111E8_A1DC_D6A6_41E3_153690EA2D27_0_1.png",
    "class": "ImageResourceLevel"
   },
   {
    "height": 122,
    "width": 512,
    "url": "media/popup_8A6111E8_A1DC_D6A6_41E3_153690EA2D27_0_2.png",
    "class": "ImageResourceLevel"
   }
  ],
  "id": "ImageResource_8A53B53B_A1DC_5F9A_41C3_F406FE7C8143",
  "class": "ImageResource"
 },
 "this.popup_8F1B581F_A1CC_F59B_41E2_37BE01E8D932",
 "this.popup_8AD1133C_A1D5_DB9E_41E2_D5363FD75AF1"
], "children": [
 {
  "toolTipPaddingTop": 4,
  "minHeight": 50,
  "paddingRight": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeight": 10,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBorderSize": 0,
  "playbackBarHeadShadow": true,
  "shadow": false,
  "progressBorderRadius": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarOpacity": 1,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarRight": 0,
  "progressBarBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "toolTipPaddingBottom": 4,
  "progressBarBorderSize": 0,
  "paddingBottom": 0,
  "playbackBarProgressBorderRadius": 0,
  "toolTipShadowSpread": 0,
  "toolTipShadowColor": "#333333",
  "toolTipFontSize": 12,
  "transitionMode": "blending",
  "toolTipTextShadowOpacity": 0,
  "toolTipFontWeight": "normal",
  "toolTipShadowBlurRadius": 3,
  "paddingTop": 0,
  "toolTipFontColor": "#606060",
  "minWidth": 100,
  "playbackBarBorderRadius": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingRight": 6,
  "progressBarOpacity": 1,
  "playbackBarHeadBorderRadius": 0,
  "class": "ViewerArea",
  "toolTipBorderRadius": 3,
  "progressBottom": 0,
  "borderSize": 0,
  "paddingLeft": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressHeight": 10,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarProgressOpacity": 1,
  "toolTipPaddingLeft": 6,
  "toolTipBorderColor": "#767676",
  "progressLeft": 0,
  "toolTipBorderSize": 1,
  "playbackBarBorderSize": 0,
  "playbackBarLeft": 0,
  "playbackBarBackgroundOpacity": 1,
  "width": "100%",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadHeight": 15,
  "toolTipOpacity": 1,
  "borderRadius": 0,
  "toolTipTextShadowBlurRadius": 3,
  "height": "100%",
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadShadowColor": "#000000",
  "top": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressOpacity": 1,
  "progressBarBorderColor": "#000000",
  "progressRight": 0,
  "playbackBarHeadOpacity": 1,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderSize": 0,
  "progressBackgroundColorDirection": "vertical",
  "id": "MainViewer",
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipShadowHorizontalLength": 0,
  "progressBackgroundOpacity": 1,
  "progressBorderColor": "#000000",
  "toolTipFontFamily": "Arial",
  "playbackBarBottom": 5,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadShadowVerticalLength": 0,
  "left": 0,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipFontStyle": "normal",
  "progressBorderSize": 0
 },
 {
  "verticalAlign": "top",
  "scrollBarVisible": "rollOver",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "minHeight": 1,
  "class": "Container",
  "paddingRight": 0,
  "borderSize": 0,
  "paddingLeft": 0,
  "width": "100%",
  "scrollBarOpacity": 0.5,
  "gap": 10,
  "horizontalAlign": "left",
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "overflow": "scroll",
  "shadow": false,
  "layout": "absolute",
  "borderRadius": 0,
  "height": "100%",
  "top": "0%",
  "visible": false,
  "paddingBottom": 0,
  "id": "Container_84BC0FAB_A055_CABA_41D7_DB1AFFECA549",
  "backgroundColorRatios": [
   0,
   1
  ],
  "backgroundColorDirection": "vertical",
  "paddingTop": 0,
  "backgroundOpacity": 0.3,
  "left": "0%",
  "minWidth": 1,
  "scrollBarColor": "#000000",
  "children": [
   {
    "verticalAlign": "top",
    "scrollBarVisible": "rollOver",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "minHeight": 1,
    "class": "Container",
    "paddingRight": 0,
    "borderSize": 0,
    "paddingLeft": 0,
    "layout": "absolute",
    "scrollBarOpacity": 0.5,
    "gap": 10,
    "horizontalAlign": "left",
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "overflow": "scroll",
    "shadow": false,
    "borderRadius": 0,
    "top": "12%",
    "backgroundColorDirection": "vertical",
    "id": "Container_84F9BCED_A054_4EBE_41A3_E989FD5C2AEC",
    "backgroundColorRatios": [
     0,
     1
    ],
    "paddingBottom": 0,
    "paddingTop": 0,
    "left": "12%",
    "backgroundOpacity": 0.3,
    "minWidth": 1,
    "bottom": "12%",
    "scrollBarColor": "#000000",
    "right": "12%",
    "children": [
     {
      "scrollEnabled": true,
      "insetBorder": false,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "minHeight": 1,
      "class": "WebFrame",
      "paddingRight": 0,
      "borderSize": 0,
      "paddingLeft": 0,
      "width": "99.762%",
      "url": "https://my.matterport.com/show/?m=K7Fxd7h5ivm",
      "height": "99.571%",
      "shadow": false,
      "borderRadius": 0,
      "top": "0%",
      "paddingBottom": 0,
      "id": "WebFrame_83E49C37_A053_CDAA_4196_3B0B6FD90B04",
      "backgroundColorRatios": [
       0
      ],
      "backgroundColorDirection": "vertical",
      "paddingTop": 0,
      "backgroundOpacity": 1,
      "left": "0%",
      "minWidth": 1
     },
     {
      "verticalAlign": "middle",
      "minHeight": 1,
      "class": "IconButton",
      "paddingRight": 0,
      "borderSize": 0,
      "paddingLeft": 0,
      "height": 90,
      "maxHeight": 326,
      "width": 80,
      "transparencyActive": false,
      "iconURL": "skin/IconButton_8693D606_A1B4_5D6A_41DD_78B70B29F1AA.png",
      "mode": "push",
      "horizontalAlign": "center",
      "maxWidth": 480,
      "shadow": false,
      "borderRadius": 0,
      "click": "this.setComponentVisibility(this.Container_84BC0FAB_A055_CABA_41D7_DB1AFFECA549, false, 0, null, null, false)",
      "top": "0%",
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_8693D606_A1B4_5D6A_41DD_78B70B29F1AA",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "minWidth": 1,
      "right": "0%"
     }
    ]
   }
  ]
 },
 {
  "verticalAlign": "top",
  "scrollBarVisible": "rollOver",
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "minHeight": 1,
  "class": "Container",
  "paddingRight": 0,
  "borderSize": 0,
  "paddingLeft": 0,
  "width": "100%",
  "scrollBarOpacity": 0.5,
  "gap": 10,
  "horizontalAlign": "left",
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "overflow": "scroll",
  "shadow": false,
  "layout": "absolute",
  "borderRadius": 0,
  "height": "100%",
  "top": "0%",
  "visible": false,
  "paddingBottom": 0,
  "id": "Container_8AD7F988_A1CC_B765_41DD_EDC28684F2E5",
  "backgroundColorRatios": [
   0,
   1
  ],
  "backgroundColorDirection": "vertical",
  "paddingTop": 0,
  "backgroundOpacity": 0.3,
  "left": "0%",
  "minWidth": 1,
  "scrollBarColor": "#000000",
  "children": [
   {
    "verticalAlign": "top",
    "scrollBarVisible": "rollOver",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "minHeight": 1,
    "class": "Container",
    "paddingRight": 0,
    "borderSize": 0,
    "paddingLeft": 0,
    "layout": "absolute",
    "scrollBarOpacity": 0.5,
    "gap": 10,
    "horizontalAlign": "left",
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "overflow": "scroll",
    "shadow": false,
    "borderRadius": 0,
    "top": "12%",
    "backgroundColorDirection": "vertical",
    "id": "Container_8ADE6DAE_A1CC_4EBA_41D6_E30D086C7728",
    "backgroundColorRatios": [
     0,
     1
    ],
    "paddingBottom": 0,
    "paddingTop": 0,
    "left": "12%",
    "backgroundOpacity": 0.3,
    "minWidth": 1,
    "bottom": "12%",
    "scrollBarColor": "#000000",
    "right": "12%",
    "children": [
     {
      "scrollEnabled": true,
      "insetBorder": false,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "minHeight": 1,
      "class": "WebFrame",
      "paddingRight": 0,
      "borderSize": 0,
      "paddingLeft": 0,
      "width": "100%",
      "url": "//www.youtube.com/embed/hcloMdwBfYs",
      "height": "100%",
      "shadow": false,
      "borderRadius": 0,
      "top": "0%",
      "paddingBottom": 0,
      "id": "WebFrame_8A09E3A6_A1CC_DAAA_41BA_F2593BBA146B",
      "backgroundColorRatios": [
       0
      ],
      "backgroundColorDirection": "vertical",
      "paddingTop": 0,
      "backgroundOpacity": 1,
      "left": "0%",
      "minWidth": 1
     },
     {
      "verticalAlign": "middle",
      "minHeight": 1,
      "class": "IconButton",
      "paddingRight": 0,
      "borderSize": 0,
      "paddingLeft": 0,
      "height": 90,
      "maxHeight": 326,
      "width": 80,
      "transparencyActive": false,
      "iconURL": "skin/IconButton_8A42DDD9_A1D4_CEE6_41D4_BA87640A8966.png",
      "mode": "push",
      "horizontalAlign": "center",
      "maxWidth": 480,
      "shadow": false,
      "borderRadius": 0,
      "click": "this.setComponentVisibility(this.Container_8AD7F988_A1CC_B765_41DD_EDC28684F2E5, false, 0, null, null, false)",
      "top": "0%",
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_8A42DDD9_A1D4_CEE6_41D4_BA87640A8966",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "minWidth": 1,
      "right": "0%"
     }
    ]
   }
  ]
 },
 {
  "verticalAlign": "middle",
  "scrollBarVisible": "rollOver",
  "minHeight": 1,
  "class": "Container",
  "paddingRight": 0,
  "borderSize": 0,
  "paddingLeft": 0,
  "width": "100%",
  "scrollBarOpacity": 0.5,
  "gap": 10,
  "horizontalAlign": "center",
  "contentOpaque": false,
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "overflow": "scroll",
  "shadow": false,
  "layout": "horizontal",
  "borderRadius": 0,
  "top": "0%",
  "paddingBottom": 0,
  "id": "Container_AF32D685_A49C_89E2_41E2_3BD3949A5D70",
  "bottom": "75.11%",
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "left": "0%",
  "minWidth": 1,
  "scrollBarColor": "#000000",
  "children": [
   {
    "verticalAlign": "top",
    "minHeight": 1,
    "class": "Container",
    "paddingRight": 0,
    "borderSize": 0,
    "paddingLeft": 0,
    "width": "32.871%",
    "scrollBarOpacity": 0.5,
    "gap": 10,
    "horizontalAlign": "left",
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "overflow": "scroll",
    "shadow": false,
    "layout": "horizontal",
    "borderRadius": 0,
    "height": "80%",
    "paddingBottom": 0,
    "id": "Container_A94C6D9B_A4BD_FBE6_41E2_07A7AABD2447",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "minWidth": 1,
    "children": [
     {
      "verticalAlign": "middle",
      "minHeight": 1,
      "class": "Image",
      "paddingRight": 0,
      "borderSize": 0,
      "paddingLeft": 0,
      "height": 61,
      "maxHeight": 71,
      "width": 223,
      "url": "skin/Image_D90E0B4F_D2A7_075C_41C8_50B33A28D8FA.png",
      "horizontalAlign": "center",
      "maxWidth": 361,
      "scaleMode": "fit_inside",
      "shadow": false,
      "borderRadius": 0,
      "paddingBottom": 0,
      "id": "Image_D90E0B4F_D2A7_075C_41C8_50B33A28D8FA",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "minWidth": 1
     },
     {
      "verticalAlign": "middle",
      "minHeight": 1,
      "class": "IconButton",
      "paddingRight": 0,
      "borderSize": 0,
      "paddingLeft": 0,
      "height": 60,
      "maxHeight": 196,
      "width": 60,
      "transparencyActive": false,
      "iconURL": "skin/IconButton_DEC29C22_D2A5_00C4_41E0_3D8CEB87BDBA.png",
      "mode": "push",
      "horizontalAlign": "center",
      "maxWidth": 196,
      "shadow": false,
      "borderRadius": 0,
      "click": "this.setComponentVisibility(this.Container_8AD7F988_A1CC_B765_41DD_EDC28684F2E5, true, 0, null, null, false)",
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_DEC29C22_D2A5_00C4_41E0_3D8CEB87BDBA",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "minWidth": 1
     }
    ],
    "scrollBarVisible": "rollOver"
   },
   {
    "verticalAlign": "top",
    "minHeight": 1,
    "class": "Container",
    "paddingRight": 0,
    "borderSize": 0,
    "paddingLeft": 0,
    "width": "33%",
    "scrollBarOpacity": 0.5,
    "gap": 10,
    "horizontalAlign": "center",
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "overflow": "scroll",
    "shadow": false,
    "layout": "horizontal",
    "borderRadius": 0,
    "height": "80%",
    "paddingBottom": 0,
    "id": "Container_A8BA2680_A49D_89E2_41C8_A480C455C6D4",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "minWidth": 1,
    "children": [
     {
      "verticalAlign": "middle",
      "minHeight": 1,
      "class": "IconButton",
      "paddingRight": 0,
      "borderSize": 0,
      "paddingLeft": 0,
      "height": 60,
      "maxHeight": 131,
      "width": 60,
      "transparencyActive": false,
      "iconURL": "skin/IconButton_82A8BA13_A054_556A_41D2_81F571B14E26.png",
      "mode": "push",
      "horizontalAlign": "center",
      "maxWidth": 131,
      "shadow": false,
      "borderRadius": 0,
      "click": "this.showPopupImage(this.ImageResource_A26191B8_AEBA_B175_41D7_C17CAE616E8A, null, '50%', '50%', this.FadeInEffect_A26181B8_AEBA_B175_41BC_E0F264D4B331, this.FadeOutEffect_A261B1B8_AEBA_B175_41DC_31124540F3CE, {'pressedBorderColor':'#000000','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconColor':'#888888','paddingRight':5,'iconColor':'#000000','borderSize':0,'paddingLeft':5,'paddingBottom':5,'borderColor':'#000000','pressedIconWidth':20,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','paddingTop':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'rollOverIconHeight':20,'iconWidth':20,'rollOverIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverIconColor':'#666666','rollOverBackgroundColorDirection':'vertical','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5}, null, null, false)",
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_82A8BA13_A054_556A_41D2_81F571B14E26",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "minWidth": 1
     },
     {
      "verticalAlign": "middle",
      "minHeight": 1,
      "class": "IconButton",
      "paddingRight": 0,
      "borderSize": 0,
      "paddingLeft": 0,
      "height": 60,
      "maxHeight": 131,
      "width": 60,
      "transparencyActive": false,
      "iconURL": "skin/IconButton_81504482_A054_5D6A_41E2_E745ED39AB62.png",
      "mode": "push",
      "horizontalAlign": "center",
      "maxWidth": 131,
      "shadow": false,
      "borderRadius": 0,
      "click": "this.mainPlayList.set('selectedIndex', 0)",
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_81504482_A054_5D6A_41E2_E745ED39AB62",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "minWidth": 1
     }
    ],
    "scrollBarVisible": "rollOver"
   },
   {
    "verticalAlign": "top",
    "minHeight": 1,
    "class": "Container",
    "paddingRight": 0,
    "borderSize": 0,
    "paddingLeft": 0,
    "width": "33%",
    "scrollBarOpacity": 0.5,
    "gap": 10,
    "horizontalAlign": "right",
    "contentOpaque": false,
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "overflow": "scroll",
    "shadow": false,
    "layout": "horizontal",
    "borderRadius": 0,
    "height": "80%",
    "paddingBottom": 0,
    "id": "Container_A9295707_A4BD_88EE_41E3_497D1B1162A8",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "minWidth": 1,
    "children": [
     {
      "verticalAlign": "middle",
      "minHeight": 1,
      "class": "IconButton",
      "paddingRight": 0,
      "borderSize": 0,
      "paddingLeft": 0,
      "height": 61,
      "maxHeight": 65,
      "width": 223,
      "transparencyActive": false,
      "iconURL": "skin/IconButton_AAC3E829_A46E_2EC0_41CC_0356FAE221A2.png",
      "mode": "push",
      "horizontalAlign": "center",
      "maxWidth": 435,
      "shadow": false,
      "borderRadius": 0,
      "click": "this.openLink(\"http://grafoexpress.com/puertas_abiertas_360_menu\", \"_top\")",
      "cursor": "hand",
      "paddingBottom": 0,
      "id": "IconButton_AAC3E829_A46E_2EC0_41CC_0356FAE221A2",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "minWidth": 1
     }
    ],
    "scrollBarVisible": "rollOver"
   }
  ]
 },
 {
  "backgroundColor": [
   "#000000"
  ],
  "minHeight": 0,
  "class": "UIComponent",
  "paddingRight": 0,
  "borderSize": 0,
  "paddingLeft": 0,
  "showEffect": {
   "duration": 350,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "shadow": false,
  "borderRadius": 0,
  "top": 0,
  "visible": false,
  "backgroundColorDirection": "vertical",
  "id": "veilPopupPanorama",
  "backgroundColorRatios": [
   0
  ],
  "paddingBottom": 0,
  "paddingTop": 0,
  "left": 0,
  "backgroundOpacity": 0.55,
  "minWidth": 0,
  "bottom": 0,
  "right": 0
 },
 {
  "backgroundColor": [],
  "minHeight": 0,
  "class": "ZoomImage",
  "paddingRight": 0,
  "borderSize": 0,
  "paddingLeft": 0,
  "scaleMode": "custom",
  "shadow": false,
  "borderRadius": 0,
  "top": 0,
  "visible": false,
  "backgroundColorDirection": "vertical",
  "id": "zoomImagePopupPanorama",
  "backgroundColorRatios": [],
  "paddingBottom": 0,
  "paddingTop": 0,
  "left": 0,
  "backgroundOpacity": 1,
  "minWidth": 0,
  "bottom": 0,
  "right": 0
 },
 {
  "verticalAlign": "middle",
  "label": "",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "minHeight": 0,
  "class": "CloseButton",
  "paddingRight": 5,
  "borderSize": 0,
  "paddingLeft": 5,
  "iconBeforeLabel": true,
  "iconHeight": 20,
  "fontFamily": "Arial",
  "iconWidth": 20,
  "shadowSpread": 1,
  "fontSize": 12,
  "showEffect": {
   "duration": 350,
   "easing": "cubic_in_out",
   "class": "FadeInEffect"
  },
  "horizontalAlign": "center",
  "fontColor": "#FFFFFF",
  "textDecoration": "none",
  "mode": "push",
  "shadow": false,
  "layout": "horizontal",
  "borderRadius": 0,
  "fontWeight": "normal",
  "fontStyle": "normal",
  "iconColor": "#000000",
  "top": 10,
  "iconLineWidth": 5,
  "cursor": "hand",
  "visible": false,
  "paddingBottom": 5,
  "borderColor": "#000000",
  "rollOverIconColor": "#666666",
  "id": "closeButtonPopupPanorama",
  "pressedIconColor": "#888888",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "shadowColor": "#000000",
  "backgroundOpacity": 0.3,
  "paddingTop": 5,
  "backgroundColorDirection": "vertical",
  "shadowBlurRadius": 6,
  "minWidth": 0,
  "gap": 5,
  "right": 10
 }
], 
 "verticalAlign": "top",
 "mouseWheelEnabled": true,
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "class": "Player",
 "paddingRight": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "width": "100%",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "horizontalAlign": "left",
 "contentOpaque": false,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "overflow": "visible",
 "shadow": false,
 "layout": "absolute",
 "borderRadius": 0,
 "height": "100%",
 "vrPolyfillScale": 0.5,
 "scripts": {
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "unregisterKey": function(key){  delete window[key]; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getKey": function(key){  return window[key]; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "existsKey": function(key){  return key in window; }
 },
 "paddingBottom": 0,
 "id": "rootPlayer",
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "minWidth": 20,
 "scrollBarColor": "#000000",
 "start": "this.mainPlayList.set('selectedIndex', 0)"
})