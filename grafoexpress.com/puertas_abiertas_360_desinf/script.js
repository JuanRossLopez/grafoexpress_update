TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "vfov": 138.72,
  "partial": false,
  "id": "panorama_DE9CDED0_D2B3_C9E7_41E9_F1751CD25646",
  "pitch": 0,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_DE9CDED0_D2B3_C9E7_41E9_F1751CD25646_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 1571,
       "width": 4077,
       "url": "media/panorama_DE9CDED0_D2B3_C9E7_41E9_F1751CD25646_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 1239,
       "width": 3217,
       "url": "media/panorama_DE9CDED0_D2B3_C9E7_41E9_F1751CD25646.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.setComponentVisibility(this.Container_BC552B3E_A51F_EE46_41D6_EEDE0AC76317, true, 0, null, null, false)"
       }
      ],
      "id": "overlay_DD057D3C_D2B3_C89F_41E2_B995C471D455",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 4.33,
        "yaw": 20.17,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 40,
           "width": 25,
           "url": "media/panorama_DE9CDED0_D2B3_C9E7_41E9_F1751CD25646_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": 11.58
       }
      ],
      "items": [
       {
        "yaw": 20.17,
        "hfov": 4.33,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 80,
           "width": 50,
           "url": "media/panorama_DE9CDED0_D2B3_C9E7_41E9_F1751CD25646_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 11.58
       }
      ]
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.showPopupPanoramaOverlay(this.popup_C2D2783C_D2B1_C89F_41E6_00CC94E05C7B, {'paddingLeft':5,'backgroundColorDirection':'vertical','pressedIconColor':'#888888','borderColor':'#000000','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','pressedIconWidth':20,'paddingRight':5,'pressedIconHeight':20,'borderSize':0,'rollOverBorderColor':'#000000','paddingBottom':5,'rollOverBackgroundOpacity':0.3,'backgroundOpacity':0.3,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconLineWidth':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'pressedBorderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','rollOverIconColor':'#666666','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_C27A4761_D2D0_58A8_41D5_1CD8D97A9308, null, null, null, null, false)"
       }
      ],
      "id": "overlay_DD435AE8_D2B3_C9B8_41E5_AE59DF464A6F",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 3.95,
        "yaw": 37.76,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 40,
           "width": 25,
           "url": "media/panorama_DE9CDED0_D2B3_C9E7_41E9_F1751CD25646_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -26.59
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": 37.76,
        "hfov": 3.95,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 80,
           "width": 50,
           "url": "media/panorama_DE9CDED0_D2B3_C9E7_41E9_F1751CD25646_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -26.59
       }
      ]
     },
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.showPopupPanoramaOverlay(this.popup_C0B5CB0C_D2D0_4878_41E2_19D39B286705, {'paddingLeft':5,'backgroundColorDirection':'vertical','pressedIconColor':'#888888','borderColor':'#000000','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','pressedIconWidth':20,'paddingRight':5,'pressedIconHeight':20,'borderSize':0,'rollOverBorderColor':'#000000','paddingBottom':5,'rollOverBackgroundOpacity':0.3,'backgroundOpacity':0.3,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconLineWidth':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'pressedBorderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','rollOverIconColor':'#666666','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverBorderSize':0}, this.ImageResource_C1F9C6B8_D2D0_D9A7_41E7_2BA67ECD1D34, null, null, null, null, false)"
       }
      ],
      "id": "overlay_DD6A5265_D2B0_38A9_41D7_96575AF60359",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 4.41,
        "yaw": 75.21,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 39,
           "width": 25,
           "url": "media/panorama_DE9CDED0_D2B3_C9E7_41E9_F1751CD25646_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": 0.61
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": 75.21,
        "hfov": 4.41,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 79,
           "width": 50,
           "url": "media/panorama_DE9CDED0_D2B3_C9E7_41E9_F1751CD25646_0_HS_2_0.png"
          }
         ]
        },
        "pitch": 0.61
       }
      ]
     },
     {
      "rotationX": 0,
      "rotationZ": 0,
      "rotationY": 0,
      "hideEasing": "cubic_out",
      "showEasing": "cubic_in",
      "popupMaxWidth": "70%",
      "hfov": 3.95,
      "hideDuration": 500,
      "yaw": 37.76,
      "showDuration": 500,
      "id": "popup_C2D2783C_D2B1_C89F_41E6_00CC94E05C7B",
      "class": "PopupPanoramaOverlay",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 167,
         "width": 1024,
         "url": "media/popup_C2D2783C_D2B1_C89F_41E6_00CC94E05C7B_0_1.png"
        }
       ]
      },
      "popupMaxHeight": "70%",
      "pitch": -26.59
     },
     {
      "rotationX": 0,
      "rotationZ": 0,
      "rotationY": 0,
      "hideEasing": "cubic_out",
      "showEasing": "cubic_in",
      "popupMaxWidth": "50%",
      "hfov": 4.41,
      "hideDuration": 500,
      "yaw": 75.21,
      "showDuration": 500,
      "id": "popup_C0B5CB0C_D2D0_4878_41E2_19D39B286705",
      "class": "PopupPanoramaOverlay",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 367,
         "width": 1024,
         "url": "media/popup_C0B5CB0C_D2D0_4878_41E2_19D39B286705_0_1.png"
        }
       ]
      },
      "popupMaxHeight": "50%",
      "pitch": 0.61
     }
    ]
   }
  ],
  "thumbnailUrl": "media/panorama_DE9CDED0_D2B3_C9E7_41E9_F1751CD25646_t.jpg",
  "label": "foto 360 desinfeccion",
  "hfov": 360,
  "class": "Panorama",
  "hfovMax": 120,
  "hfovMin": 60
 },
 {
  "preloadEnabled": false,
  "mouseControlMode": "drag_acceleration",
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "class": "PanoramaPlayer",
  "displayPlaybackBar": true,
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_rotation"
 },
 {
  "id": "panorama_DE9CDED0_D2B3_C9E7_41E9_F1751CD25646_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 25.75,
   "pitch": -1.18
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_DE9CDED0_D2B3_C9E7_41E9_F1751CD25646",
    "camera": "this.panorama_DE9CDED0_D2B3_C9E7_41E9_F1751CD25646_camera"
   }
  ]
 },
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 202,
    "width": 1715,
    "url": "media/zoomImage_A7F2B556_AA94_9895_41B9_F31393971F92_0_0.png"
   },
   {
    "class": "ImageResourceLevel",
    "height": 120,
    "width": 1024,
    "url": "media/zoomImage_A7F2B556_AA94_9895_41B9_F31393971F92_0_1.png"
   },
   {
    "class": "ImageResourceLevel",
    "height": 60,
    "width": 512,
    "url": "media/zoomImage_A7F2B556_AA94_9895_41B9_F31393971F92_0_2.png"
   }
  ],
  "id": "ImageResource_A6A8D226_AA9D_B8B2_41E3_33660BCCDF7B"
 },
 {
  "class": "FadeInEffect",
  "duration": 500,
  "id": "FadeInEffect_A6A8C226_AA9D_B8B2_41D7_D551419E0D00",
  "easing": "cubic_in"
 },
 {
  "class": "FadeOutEffect",
  "duration": 500,
  "id": "FadeOutEffect_A6A8F226_AA9D_B8B2_41B6_9957CA3571B3",
  "easing": "cubic_out"
 },
 "this.popup_C2D2783C_D2B1_C89F_41E6_00CC94E05C7B",
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 293,
    "width": 1786,
    "url": "media/popup_C2D2783C_D2B1_C89F_41E6_00CC94E05C7B_0_0.png"
   },
   {
    "class": "ImageResourceLevel",
    "height": 167,
    "width": 1024,
    "url": "media/popup_C2D2783C_D2B1_C89F_41E6_00CC94E05C7B_0_1.png"
   },
   {
    "class": "ImageResourceLevel",
    "height": 83,
    "width": 512,
    "url": "media/popup_C2D2783C_D2B1_C89F_41E6_00CC94E05C7B_0_2.png"
   }
  ],
  "id": "ImageResource_C27A4761_D2D0_58A8_41D5_1CD8D97A9308"
 },
 "this.popup_C0B5CB0C_D2D0_4878_41E2_19D39B286705",
 {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "height": 500,
    "width": 1395,
    "url": "media/popup_C0B5CB0C_D2D0_4878_41E2_19D39B286705_0_0.png"
   },
   {
    "class": "ImageResourceLevel",
    "height": 367,
    "width": 1024,
    "url": "media/popup_C0B5CB0C_D2D0_4878_41E2_19D39B286705_0_1.png"
   },
   {
    "class": "ImageResourceLevel",
    "height": 183,
    "width": 512,
    "url": "media/popup_C0B5CB0C_D2D0_4878_41E2_19D39B286705_0_2.png"
   }
  ],
  "id": "ImageResource_C1F9C6B8_D2D0_D9A7_41E7_2BA67ECD1D34"
 }
], "children": [
 {
  "paddingLeft": 0,
  "toolTipBorderSize": 1,
  "playbackBarHeight": 10,
  "paddingRight": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "minWidth": 100,
  "playbackBarHeadWidth": 6,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBackgroundOpacity": 1,
  "playbackBarProgressBorderSize": 0,
  "playbackBarRight": 0,
  "progressBarBorderRadius": 0,
  "class": "ViewerArea",
  "progressBarBorderSize": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBorderRadius": 0,
  "transitionMode": "blending",
  "shadow": false,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "paddingBottom": 0,
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "toolTipShadowSpread": 0,
  "toolTipOpacity": 1,
  "playbackBarBorderRadius": 0,
  "paddingTop": 0,
  "toolTipFontColor": "#606060",
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingRight": 6,
  "playbackBarHeadBorderRadius": 0,
  "progressLeft": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipBorderRadius": 3,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarProgressOpacity": 1,
  "borderSize": 0,
  "toolTipFontStyle": "normal",
  "toolTipShadowOpacity": 1,
  "playbackBarBorderSize": 0,
  "playbackBarLeft": 0,
  "width": "100%",
  "toolTipPaddingLeft": 6,
  "height": "100%",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadHeight": 15,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipFontWeight": "normal",
  "progressBorderSize": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipPaddingBottom": 4,
  "progressBarBorderColor": "#000000",
  "progressRight": 0,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadBorderSize": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressOpacity": 1,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipTextShadowBlurRadius": 3,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipFontSize": 12,
  "top": 0,
  "progressBottom": 0,
  "progressBarOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarBottom": 5,
  "playbackBarHeadShadow": true,
  "minHeight": 50,
  "progressHeight": 10,
  "progressBorderColor": "#000000",
  "id": "MainViewer",
  "playbackBarHeadShadowHorizontalLength": 0,
  "borderRadius": 0,
  "playbackBarHeadOpacity": 1,
  "toolTipTextShadowColor": "#000000",
  "toolTipFontFamily": "Arial",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "toolTipTextShadowOpacity": 0,
  "progressBorderRadius": 0,
  "left": 0,
  "toolTipPaddingTop": 4,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipShadowHorizontalLength": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarOpacity": 1,
  "playbackBarHeadBackgroundColorDirection": "vertical"
 },
 {
  "paddingLeft": 0,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingRight": 0,
  "borderSize": 0,
  "height": "100%",
  "minWidth": 1,
  "gap": 10,
  "verticalAlign": "top",
  "backgroundColorRatios": [
   0,
   1
  ],
  "horizontalAlign": "left",
  "backgroundColorDirection": "vertical",
  "scrollBarMargin": 2,
  "layout": "absolute",
  "class": "Container",
  "width": "100%",
  "scrollBarWidth": 10,
  "overflow": "scroll",
  "top": "0%",
  "shadow": false,
  "visible": false,
  "paddingBottom": 0,
  "borderRadius": 0,
  "minHeight": 1,
  "id": "Container_84BC0FAB_A055_CABA_41D7_DB1AFFECA549",
  "backgroundOpacity": 0.3,
  "paddingTop": 0,
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "left": "0%",
  "scrollBarVisible": "rollOver",
  "children": [
   {
    "paddingLeft": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "paddingRight": 0,
    "borderSize": 0,
    "layout": "absolute",
    "minWidth": 1,
    "gap": 10,
    "verticalAlign": "top",
    "backgroundColorRatios": [
     0,
     1
    ],
    "horizontalAlign": "left",
    "backgroundColorDirection": "vertical",
    "scrollBarMargin": 2,
    "class": "Container",
    "scrollBarWidth": 10,
    "overflow": "scroll",
    "top": "12%",
    "shadow": false,
    "paddingBottom": 0,
    "borderRadius": 0,
    "minHeight": 1,
    "id": "Container_84F9BCED_A054_4EBE_41A3_E989FD5C2AEC",
    "backgroundOpacity": 0.3,
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "bottom": "12%",
    "left": "12%",
    "scrollBarVisible": "rollOver",
    "right": "12%",
    "children": [
     {
      "paddingLeft": 0,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "paddingRight": 0,
      "borderSize": 0,
      "height": "99.571%",
      "minWidth": 1,
      "url": "https://my.matterport.com/show/?m=WiNQ6XHJge4\n\n",
      "backgroundColorRatios": [
       0
      ],
      "width": "99.762%",
      "backgroundColorDirection": "vertical",
      "scrollEnabled": true,
      "class": "WebFrame",
      "top": "0%",
      "shadow": false,
      "paddingBottom": 0,
      "borderRadius": 0,
      "minHeight": 1,
      "id": "WebFrame_83E49C37_A053_CDAA_4196_3B0B6FD90B04",
      "backgroundOpacity": 1,
      "paddingTop": 0,
      "left": "0%",
      "insetBorder": false
     },
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "mode": "push",
      "borderSize": 0,
      "width": 80,
      "maxHeight": 326,
      "height": 90,
      "minWidth": 1,
      "verticalAlign": "middle",
      "transparencyActive": false,
      "iconURL": "skin/IconButton_8693D606_A1B4_5D6A_41DD_78B70B29F1AA.png",
      "horizontalAlign": "center",
      "click": "this.setComponentVisibility(this.Container_84BC0FAB_A055_CABA_41D7_DB1AFFECA549, false, 0, null, null, false)",
      "class": "IconButton",
      "maxWidth": 480,
      "top": "0%",
      "shadow": false,
      "paddingBottom": 0,
      "borderRadius": 0,
      "cursor": "hand",
      "id": "IconButton_8693D606_A1B4_5D6A_41DD_78B70B29F1AA",
      "backgroundOpacity": 0,
      "minHeight": 1,
      "paddingTop": 0,
      "right": "0%"
     }
    ],
    "scrollBarOpacity": 0.5
   }
  ],
  "scrollBarOpacity": 0.5
 },
 {
  "paddingLeft": 0,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingRight": 0,
  "borderSize": 0,
  "height": "100%",
  "minWidth": 1,
  "gap": 10,
  "verticalAlign": "top",
  "backgroundColorRatios": [
   0,
   1
  ],
  "horizontalAlign": "left",
  "backgroundColorDirection": "vertical",
  "scrollBarMargin": 2,
  "layout": "absolute",
  "class": "Container",
  "width": "100%",
  "scrollBarWidth": 10,
  "overflow": "scroll",
  "top": "0%",
  "shadow": false,
  "visible": false,
  "paddingBottom": 0,
  "borderRadius": 0,
  "minHeight": 1,
  "id": "Container_8AD7F988_A1CC_B765_41DD_EDC28684F2E5",
  "backgroundOpacity": 0.3,
  "paddingTop": 0,
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "left": "0%",
  "scrollBarVisible": "rollOver",
  "children": [
   {
    "paddingLeft": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "paddingRight": 0,
    "borderSize": 0,
    "layout": "absolute",
    "minWidth": 1,
    "gap": 10,
    "verticalAlign": "top",
    "backgroundColorRatios": [
     0,
     1
    ],
    "horizontalAlign": "left",
    "backgroundColorDirection": "vertical",
    "scrollBarMargin": 2,
    "class": "Container",
    "scrollBarWidth": 10,
    "overflow": "scroll",
    "top": "12%",
    "shadow": false,
    "paddingBottom": 0,
    "borderRadius": 0,
    "minHeight": 1,
    "id": "Container_8ADE6DAE_A1CC_4EBA_41D6_E30D086C7728",
    "backgroundOpacity": 0.3,
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "bottom": "12%",
    "left": "12%",
    "scrollBarVisible": "rollOver",
    "right": "12%",
    "children": [
     {
      "paddingLeft": 0,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "paddingRight": 0,
      "borderSize": 0,
      "height": "100%",
      "minWidth": 1,
      "url": "//www.youtube.com/embed/kqfZdPrkLis",
      "backgroundColorRatios": [
       0
      ],
      "width": "100%",
      "backgroundColorDirection": "vertical",
      "scrollEnabled": true,
      "class": "WebFrame",
      "top": "0%",
      "shadow": false,
      "paddingBottom": 0,
      "borderRadius": 0,
      "minHeight": 1,
      "id": "WebFrame_8A09E3A6_A1CC_DAAA_41BA_F2593BBA146B",
      "backgroundOpacity": 1,
      "paddingTop": 0,
      "left": "0%",
      "insetBorder": false
     },
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "mode": "push",
      "borderSize": 0,
      "width": 80,
      "maxHeight": 326,
      "height": 90,
      "minWidth": 1,
      "verticalAlign": "middle",
      "transparencyActive": false,
      "iconURL": "skin/IconButton_8A42DDD9_A1D4_CEE6_41D4_BA87640A8966.png",
      "horizontalAlign": "center",
      "click": "this.setComponentVisibility(this.Container_8AD7F988_A1CC_B765_41DD_EDC28684F2E5, false, 0, null, null, false)",
      "class": "IconButton",
      "maxWidth": 480,
      "top": "0%",
      "shadow": false,
      "paddingBottom": 0,
      "borderRadius": 0,
      "cursor": "hand",
      "id": "IconButton_8A42DDD9_A1D4_CEE6_41D4_BA87640A8966",
      "backgroundOpacity": 0,
      "minHeight": 1,
      "paddingTop": 0,
      "right": "0%"
     }
    ],
    "scrollBarOpacity": 0.5
   }
  ],
  "scrollBarOpacity": 0.5
 },
 {
  "paddingLeft": 0,
  "paddingRight": 0,
  "borderSize": 0,
  "layout": "horizontal",
  "minWidth": 1,
  "gap": 10,
  "verticalAlign": "middle",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "horizontalAlign": "center",
  "class": "Container",
  "width": "100%",
  "overflow": "scroll",
  "top": "0%",
  "shadow": false,
  "paddingBottom": 0,
  "borderRadius": 0,
  "minHeight": 1,
  "id": "Container_AF32D685_A49C_89E2_41E2_3BD3949A5D70",
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "bottom": "75.11%",
  "left": "0%",
  "scrollBarVisible": "rollOver",
  "children": [
   {
    "paddingLeft": 0,
    "paddingRight": 0,
    "borderSize": 0,
    "height": "80%",
    "minWidth": 1,
    "gap": 10,
    "verticalAlign": "top",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "horizontalAlign": "left",
    "layout": "horizontal",
    "class": "Container",
    "width": "32.871%",
    "overflow": "scroll",
    "shadow": false,
    "paddingBottom": 0,
    "borderRadius": 0,
    "minHeight": 1,
    "id": "Container_A94C6D9B_A4BD_FBE6_41E2_07A7AABD2447",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "scrollBarVisible": "rollOver",
    "children": [
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "borderSize": 0,
      "width": 223,
      "maxHeight": 79,
      "height": 61,
      "minWidth": 1,
      "url": "skin/Image_DF929AA6_D2B0_49A8_41E5_7EC86598934E.png",
      "verticalAlign": "middle",
      "horizontalAlign": "center",
      "class": "Image",
      "scaleMode": "fit_inside",
      "maxWidth": 470,
      "shadow": false,
      "paddingBottom": 0,
      "borderRadius": 0,
      "minHeight": 1,
      "id": "Image_DF929AA6_D2B0_49A8_41E5_7EC86598934E",
      "backgroundOpacity": 0,
      "paddingTop": 0
     },
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "mode": "push",
      "borderSize": 0,
      "width": 60,
      "maxHeight": 196,
      "height": 60,
      "minWidth": 1,
      "verticalAlign": "middle",
      "transparencyActive": false,
      "iconURL": "skin/IconButton_DFD2D8C0_D2B1_C9E7_41D2_A5254BFFB216.png",
      "horizontalAlign": "center",
      "click": "this.setComponentVisibility(this.Container_8AD7F988_A1CC_B765_41DD_EDC28684F2E5, true, 0, null, null, false)",
      "class": "IconButton",
      "maxWidth": 196,
      "shadow": false,
      "paddingBottom": 0,
      "borderRadius": 0,
      "cursor": "hand",
      "id": "IconButton_DFD2D8C0_D2B1_C9E7_41D2_A5254BFFB216",
      "backgroundOpacity": 0,
      "minHeight": 1,
      "paddingTop": 0
     }
    ],
    "scrollBarOpacity": 0.5
   },
   {
    "paddingLeft": 0,
    "paddingRight": 0,
    "borderSize": 0,
    "height": "80%",
    "minWidth": 1,
    "gap": 10,
    "verticalAlign": "top",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "horizontalAlign": "center",
    "layout": "horizontal",
    "class": "Container",
    "width": "33%",
    "overflow": "scroll",
    "shadow": false,
    "paddingBottom": 0,
    "borderRadius": 0,
    "minHeight": 1,
    "id": "Container_A8BA2680_A49D_89E2_41C8_A480C455C6D4",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "scrollBarVisible": "rollOver",
    "children": [
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "mode": "push",
      "borderSize": 0,
      "width": 60,
      "maxHeight": 131,
      "height": 60,
      "minWidth": 1,
      "verticalAlign": "middle",
      "transparencyActive": false,
      "iconURL": "skin/IconButton_82A8BA13_A054_556A_41D2_81F571B14E26.png",
      "horizontalAlign": "center",
      "click": "this.showPopupImage(this.ImageResource_A6A8D226_AA9D_B8B2_41E3_33660BCCDF7B, null, '70%', '70%', this.FadeInEffect_A6A8C226_AA9D_B8B2_41D7_D551419E0D00, this.FadeOutEffect_A6A8F226_AA9D_B8B2_41B6_9957CA3571B3, {'paddingLeft':5,'backgroundColorDirection':'vertical','pressedIconColor':'#888888','borderColor':'#000000','iconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBorderColor':'#000000','pressedIconWidth':20,'paddingRight':5,'pressedIconHeight':20,'borderSize':0,'rollOverBorderColor':'#000000','paddingBottom':5,'rollOverBackgroundOpacity':0.3,'backgroundOpacity':0.3,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingTop':5,'rollOverIconLineWidth':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'pressedBorderSize':0,'pressedIconLineWidth':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColorDirection':'vertical','rollOverIconColor':'#666666','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'iconLineWidth':5,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','rollOverBorderSize':0}, null, null, false)",
      "class": "IconButton",
      "maxWidth": 131,
      "shadow": false,
      "paddingBottom": 0,
      "borderRadius": 0,
      "cursor": "hand",
      "id": "IconButton_82A8BA13_A054_556A_41D2_81F571B14E26",
      "backgroundOpacity": 0,
      "minHeight": 1,
      "paddingTop": 0
     },
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "mode": "push",
      "borderSize": 0,
      "width": 60,
      "maxHeight": 131,
      "height": 60,
      "minWidth": 1,
      "verticalAlign": "middle",
      "transparencyActive": false,
      "iconURL": "skin/IconButton_81504482_A054_5D6A_41E2_E745ED39AB62.png",
      "horizontalAlign": "center",
      "click": "this.mainPlayList.set('selectedIndex', 0)",
      "class": "IconButton",
      "maxWidth": 131,
      "shadow": false,
      "paddingBottom": 0,
      "borderRadius": 0,
      "cursor": "hand",
      "id": "IconButton_81504482_A054_5D6A_41E2_E745ED39AB62",
      "backgroundOpacity": 0,
      "minHeight": 1,
      "paddingTop": 0
     }
    ],
    "scrollBarOpacity": 0.5
   },
   {
    "paddingLeft": 0,
    "paddingRight": 0,
    "borderSize": 0,
    "height": "80%",
    "minWidth": 1,
    "gap": 10,
    "verticalAlign": "top",
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "horizontalAlign": "right",
    "layout": "horizontal",
    "class": "Container",
    "width": "33%",
    "overflow": "scroll",
    "shadow": false,
    "paddingBottom": 0,
    "borderRadius": 0,
    "minHeight": 1,
    "id": "Container_A9295707_A4BD_88EE_41E3_497D1B1162A8",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "scrollBarVisible": "rollOver",
    "children": [
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "mode": "push",
      "borderSize": 0,
      "width": 223,
      "maxHeight": 65,
      "height": 61,
      "minWidth": 1,
      "verticalAlign": "middle",
      "transparencyActive": false,
      "iconURL": "skin/IconButton_AAC3E829_A46E_2EC0_41CC_0356FAE221A2.png",
      "horizontalAlign": "center",
      "click": "this.openLink(\"http://grafoexpress.com/puertas_abiertas_360_menu\", \"_top\")",
      "class": "IconButton",
      "maxWidth": 435,
      "shadow": false,
      "paddingBottom": 0,
      "borderRadius": 0,
      "cursor": "hand",
      "id": "IconButton_AAC3E829_A46E_2EC0_41CC_0356FAE221A2",
      "backgroundOpacity": 0,
      "minHeight": 1,
      "paddingTop": 0
     }
    ],
    "scrollBarOpacity": 0.5
   }
  ],
  "scrollBarOpacity": 0.5
 },
 {
  "paddingLeft": 0,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingRight": 0,
  "borderSize": 0,
  "height": "100%",
  "minWidth": 1,
  "gap": 10,
  "verticalAlign": "top",
  "backgroundColorRatios": [
   0,
   1
  ],
  "horizontalAlign": "left",
  "backgroundColorDirection": "vertical",
  "scrollBarMargin": 2,
  "layout": "absolute",
  "class": "Container",
  "width": "100%",
  "scrollBarWidth": 10,
  "overflow": "scroll",
  "top": "0%",
  "shadow": false,
  "visible": false,
  "paddingBottom": 0,
  "borderRadius": 0,
  "minHeight": 1,
  "id": "Container_BC552B3E_A51F_EE46_41D6_EEDE0AC76317",
  "backgroundOpacity": 0.3,
  "paddingTop": 0,
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "left": "0%",
  "scrollBarVisible": "rollOver",
  "children": [
   {
    "paddingLeft": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "paddingRight": 0,
    "borderSize": 0,
    "layout": "absolute",
    "minWidth": 1,
    "gap": 10,
    "verticalAlign": "top",
    "backgroundColorRatios": [
     0,
     1
    ],
    "horizontalAlign": "left",
    "backgroundColorDirection": "vertical",
    "scrollBarMargin": 2,
    "class": "Container",
    "scrollBarWidth": 10,
    "overflow": "scroll",
    "top": "12%",
    "shadow": false,
    "paddingBottom": 0,
    "borderRadius": 0,
    "minHeight": 1,
    "id": "Container_BFB22C0C_A511_EA4A_41DB_EC07DAE0B063",
    "backgroundOpacity": 0.3,
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "bottom": "12%",
    "left": "12%",
    "scrollBarVisible": "rollOver",
    "right": "12%",
    "children": [
     {
      "paddingLeft": 0,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "paddingRight": 0,
      "borderSize": 0,
      "height": "100%",
      "minWidth": 1,
      "url": "https://my.matterport.com/show/?m=rNXv8nEfrXh",
      "backgroundColorRatios": [
       0
      ],
      "width": "100%",
      "backgroundColorDirection": "vertical",
      "scrollEnabled": true,
      "class": "WebFrame",
      "top": "0%",
      "shadow": false,
      "paddingBottom": 0,
      "borderRadius": 0,
      "minHeight": 1,
      "id": "WebFrame_BCFA7A94_A512_6E5A_41D7_3BF16E7B0D6C",
      "backgroundOpacity": 1,
      "paddingTop": 0,
      "left": "0%",
      "insetBorder": false
     },
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "mode": "push",
      "borderSize": 0,
      "width": 80,
      "maxHeight": 326,
      "height": 90,
      "minWidth": 1,
      "verticalAlign": "middle",
      "transparencyActive": false,
      "iconURL": "skin/IconButton_BFC9EFE2_A512_65FE_41E0_B61A4E45FE84.png",
      "horizontalAlign": "center",
      "click": "this.setComponentVisibility(this.Container_BC552B3E_A51F_EE46_41D6_EEDE0AC76317, false, 0, null, null, false)",
      "class": "IconButton",
      "maxWidth": 480,
      "top": "0%",
      "shadow": false,
      "paddingBottom": 0,
      "borderRadius": 0,
      "cursor": "hand",
      "id": "IconButton_BFC9EFE2_A512_65FE_41E0_B61A4E45FE84",
      "backgroundOpacity": 0,
      "minHeight": 1,
      "paddingTop": 0,
      "right": "0%"
     }
    ],
    "scrollBarOpacity": 0.5
   }
  ],
  "scrollBarOpacity": 0.5
 },
 {
  "paddingLeft": 0,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingRight": 0,
  "borderSize": 0,
  "height": "100%",
  "minWidth": 1,
  "gap": 10,
  "verticalAlign": "top",
  "backgroundColorRatios": [
   0,
   1
  ],
  "horizontalAlign": "left",
  "backgroundColorDirection": "vertical",
  "scrollBarMargin": 2,
  "layout": "absolute",
  "class": "Container",
  "width": "100%",
  "scrollBarWidth": 10,
  "overflow": "scroll",
  "top": "0%",
  "shadow": false,
  "visible": false,
  "paddingBottom": 0,
  "borderRadius": 0,
  "minHeight": 1,
  "id": "Container_BFDEA36F_A532_5EC5_41DB_E6405BC0E323",
  "backgroundOpacity": 0.3,
  "paddingTop": 0,
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "left": "0%",
  "scrollBarVisible": "rollOver",
  "children": [
   {
    "paddingLeft": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "paddingRight": 0,
    "borderSize": 0,
    "layout": "absolute",
    "minWidth": 1,
    "gap": 10,
    "verticalAlign": "top",
    "backgroundColorRatios": [
     0,
     1
    ],
    "horizontalAlign": "left",
    "backgroundColorDirection": "vertical",
    "scrollBarMargin": 2,
    "class": "Container",
    "scrollBarWidth": 10,
    "overflow": "scroll",
    "top": "12%",
    "shadow": false,
    "paddingBottom": 0,
    "borderRadius": 0,
    "minHeight": 1,
    "id": "Container_BFF60417_A532_7A45_41D9_3EF6FBE262FB",
    "backgroundOpacity": 0.3,
    "paddingTop": 0,
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "bottom": "12%",
    "left": "12%",
    "scrollBarVisible": "rollOver",
    "right": "12%",
    "children": [
     {
      "paddingLeft": 0,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "paddingRight": 0,
      "borderSize": 0,
      "height": "100%",
      "minWidth": 1,
      "url": "https://my.matterport.com/show/?m=c9smzyrv56N",
      "backgroundColorRatios": [
       0
      ],
      "width": "100%",
      "backgroundColorDirection": "vertical",
      "scrollEnabled": true,
      "class": "WebFrame",
      "top": "0%",
      "shadow": false,
      "paddingBottom": 0,
      "borderRadius": 0,
      "minHeight": 1,
      "id": "WebFrame_BFD8E65A_A536_A6CE_41A4_F0DD35D626F3",
      "backgroundOpacity": 1,
      "paddingTop": 0,
      "left": "0%",
      "insetBorder": false
     },
     {
      "paddingLeft": 0,
      "paddingRight": 0,
      "mode": "push",
      "borderSize": 0,
      "width": 80,
      "maxHeight": 326,
      "height": 90,
      "minWidth": 1,
      "verticalAlign": "middle",
      "transparencyActive": false,
      "iconURL": "skin/IconButton_BF377811_A536_6A5A_41D9_C163F0763F48.png",
      "horizontalAlign": "center",
      "click": "this.setComponentVisibility(this.Container_BFDEA36F_A532_5EC5_41DB_E6405BC0E323, false, 0, null, null, false)",
      "class": "IconButton",
      "maxWidth": 480,
      "top": "0%",
      "shadow": false,
      "paddingBottom": 0,
      "borderRadius": 0,
      "cursor": "hand",
      "id": "IconButton_BF377811_A536_6A5A_41D9_C163F0763F48",
      "backgroundOpacity": 0,
      "minHeight": 1,
      "paddingTop": 0,
      "right": "0%"
     }
    ],
    "scrollBarOpacity": 0.5
   }
  ],
  "scrollBarOpacity": 0.5
 },
 {
  "paddingLeft": 0,
  "backgroundColor": [
   "#000000"
  ],
  "paddingRight": 0,
  "borderSize": 0,
  "minWidth": 0,
  "backgroundColorRatios": [
   0
  ],
  "backgroundColorDirection": "vertical",
  "class": "UIComponent",
  "top": 0,
  "shadow": false,
  "visible": false,
  "paddingBottom": 0,
  "borderRadius": 0,
  "minHeight": 0,
  "id": "veilPopupPanorama",
  "backgroundOpacity": 0.55,
  "paddingTop": 0,
  "bottom": 0,
  "left": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "right": 0
 },
 {
  "paddingLeft": 0,
  "backgroundColor": [],
  "paddingRight": 0,
  "borderSize": 0,
  "minWidth": 0,
  "backgroundColorRatios": [],
  "backgroundColorDirection": "vertical",
  "class": "ZoomImage",
  "scaleMode": "custom",
  "top": 0,
  "shadow": false,
  "visible": false,
  "paddingBottom": 0,
  "borderRadius": 0,
  "minHeight": 0,
  "id": "zoomImagePopupPanorama",
  "backgroundOpacity": 1,
  "paddingTop": 0,
  "bottom": 0,
  "left": 0,
  "right": 0
 },
 {
  "paddingLeft": 5,
  "iconHeight": 20,
  "iconBeforeLabel": true,
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "paddingRight": 5,
  "mode": "push",
  "borderSize": 0,
  "fontSize": 12,
  "iconColor": "#000000",
  "minWidth": 0,
  "textDecoration": "none",
  "fontFamily": "Arial",
  "verticalAlign": "middle",
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "horizontalAlign": "center",
  "iconWidth": 20,
  "backgroundColorDirection": "vertical",
  "fontStyle": "normal",
  "class": "CloseButton",
  "iconLineWidth": 5,
  "fontWeight": "normal",
  "pressedIconColor": "#888888",
  "top": 10,
  "shadow": false,
  "visible": false,
  "paddingBottom": 5,
  "borderRadius": 0,
  "cursor": "hand",
  "id": "closeButtonPopupPanorama",
  "borderColor": "#000000",
  "layout": "horizontal",
  "backgroundOpacity": 0.3,
  "fontColor": "#FFFFFF",
  "minHeight": 0,
  "paddingTop": 5,
  "shadowSpread": 1,
  "shadowColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "duration": 350,
   "easing": "cubic_in_out"
  },
  "label": "",
  "gap": 5,
  "rollOverIconColor": "#666666",
  "right": 10,
  "shadowBlurRadius": 6
 }
], 
 "paddingLeft": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "height": "100%",
 "minWidth": 20,
 "gap": 10,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "vrPolyfillScale": 0.5,
 "scrollBarMargin": 2,
 "layout": "absolute",
 "backgroundPreloadEnabled": true,
 "class": "Player",
 "width": "100%",
 "scrollBarWidth": 10,
 "overflow": "visible",
 "scripts": {
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getKey": function(key){  return window[key]; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "registerKey": function(key, value){  window[key] = value; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio) delete audios[audio.get('id')]; } if(audio) audio.stop(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "existsKey": function(key){  return key in window; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "unregisterKey": function(key){  delete window[key]; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); }
 },
 "shadow": false,
 "paddingBottom": 0,
 "borderRadius": 0,
 "minHeight": 20,
 "id": "rootPlayer",
 "paddingTop": 0,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "scrollBarVisible": "rollOver",
 "mouseWheelEnabled": true,
 "scrollBarOpacity": 0.5
})