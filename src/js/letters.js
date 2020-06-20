const letters = {
  "0":{offset:[18,19],
       name:"այբ/ayb",
       path:[`M 0.88,9.38
           C 0.88,9.38 7.25,3.50 9.75,1.62
             13.62,-1.62 14.62,3.00 14.12,4.00
             14.12,4.00 2.00,28.62 0.75,32.00
             -0.25,36.00 3.12,37.00 6.25,34.25
             10.12,31.50 13.75,28.75 13.75,28.75`,`M 26.38,1.62
           C 26.38,1.62 10.88,35.00 10.88,35.00`,`M 13.50,28.75
           C 13.50,28.75 18.75,24.88 18.75,24.88
             18.75,24.88 20.38,23.88 21.75,23.00
             26.25,21.12 25.25,24.75 25.25,24.75
             25.25,24.75 22.75,29.62 21.25,32.62
             19.69,35.63 22.75,37.75 25.95,33.30
             27.38,31.38 27.12,31.50 28.75,29.62`,`M 37.25,21.00
           C 37.25,21.00 32.00,31.62 31.88,31.75
             30.25,36.00 36.00,38.50 39.88,31.75`,`M 45.25,21.00
           C 42.50,26.38 42.12,26.75 39.75,31.88
             37.88,36.00 42.88,38.38 46.50,32.12`,`M 52.62,21.00
           C 49.88,25.88 46.88,31.12 46.62,32.12
             45.50,36.75 49.62,38.12 54.50,30.38`]},

  "1":{offset:[17,19],
       name:"բեն/ben",
       path:[`M 14.75,6.88
           C 14.75,6.88 17.88,2.75 19.38,1.75
             23.75,-1.50 24.75,1.25 23.88,3.62
             22.85,6.38 0.54,55.27 0.50,55.00`,`M 19.75,12.62
           C 24.25,6.00 25.62,5.12 29.75,2.12
             32.75,-0.38 35.88,1.62 36.12,3.88
             35.00,10.62 34.12,11.00 29.75,20.25`,`M 10.50,33.00
           C 10.50,33.00 14.38,32.50 16.75,32.25
             16.75,32.25 19.25,32.25 21.50,33.62
             25.88,37.62 28.62,34.00 28.62,34.00`,`M 44.50,21.00
           C 44.40,21.25 28.50,55.01 28.50,55.00`,`M 41.62,27.12
           C 45.00,23.62 46.00,23.00 48.62,22.12
             49.62,21.88 51.12,21.25 51.75,23.75
             51.12,26.12 49.50,28.75 49.50,28.75`,`M 37.88,35.00
           C 37.88,35.00 41.12,33.50 43.12,33.38
             44.88,33.62 46.12,34.50 47.00,34.88
             49.88,37.00 52.12,34.75 52.12,34.75`]},
    "2":{offset:[20,20],
         name:"գիմ/gim",
         path:[`M 18.50,23.50
           C 19.75,21.12 21.62,17.38 24.62,9.12
             27.12,2.88 23.13,-3.50 14.75,3.50
             7.75,9.50 3.12,19.00 1.62,23.50
             0.12,28.62 0.62,28.25 1.00,31.38
             2.12,34.62 7.25,37.00 11.75,32.62
             14.00,30.38 15.62,29.38 18.50,23.50 Z`,`M 18.38,23.62
           C 18.38,23.62 6.00,49.25 3.62,55.00`,`M 13.50,33.75
           C 13.50,33.75 19.25,31.25 21.75,33.38
             23.38,35.00 25.62,35.75 27.62,33.50`,`M 43.62,29.00
           C 43.62,29.00 44.75,26.75 44.50,24.38
             44.50,24.38 43.62,18.88 37.88,22.75
             35.00,25.50 33.62,26.75 32.62,31.25
             33.00,35.00 37.50,36.00 40.00,34.38
             42.88,32.00 43.62,29.00 43.62,29.00 Z`,`M 43.75,28.88
           C 43.75,28.88 34.00,49.50 31.50,55.00`,`M 41.12,34.50
           C 43.75,33.00 46.00,33.75 46.88,34.25
             50.00,37.00 51.75,34.75 52.88,33.75`]},

     "3":{offset:[23,13],
          name:"դա/da",
          path:[`M 1.75,15.25
           C 1.75,15.25 9.25,8.25 10.12,7.50
             14.30,4.60 16.38,7.50 15.25,10.38
             15.25,10.38 0.50,42.00 0.50,42.00`,`M 12.00,17.12
           C 12.00,17.12 20.50,9.50 21.88,8.25
             25.25,5.00 28.12,7.75 26.88,10.50
             25.00,15.12 3.88,61.00 3.88,61.00`,`M 14.00,39.00
           C 17.12,38.00 18.62,37.88 21.00,39.38
             24.38,42.00 26.62,39.62 26.62,39.62`,`M 36.50,27.00
           C 36.50,27.00 29.50,42.00 29.50,42.00`,`M 34.38,31.50
           C 34.38,31.50 36.62,29.12 39.38,28.00
             43.00,27.00 43.25,29.00 42.75,31.12
             41.00,36.25 29.88,61.00 29.88,61.00`,`M 39.38,39.88
           C 42.41,38.39 43.79,39.48 45.12,40.00
             48.00,42.00 48.88,42.00 51.12,39.50`]},

     "4":{offset:[30,14],
          name:"եչ/yeč",
          path:[`M 1.00,14.00
           C 1.00,14.00 3.12,10.88 8.12,8.12
             14.12,5.00 13.00,9.12 13.12,9.75
             9.62,17.50 2.38,32.88 0.62,36.50
             -0.12,43.00 4.25,41.00 7.00,38.00
             7.00,38.00 11.50,32.38 14.75,27.38`, `M 12.88,30.00
           C 12.12,31.00 10.12,36.38 9.75,38.75
             9.62,43.25 15.25,39.62 16.88,37.88`, `M 7.75,21.38
           C 11.62,20.00 14.00,20.50 16.50,21.50
             19.88,22.62 22.12,22.75 24.62,20.75`, `M 37.12,6.75
           C 37.12,6.75 24.12,35.25 23.12,37.50
             22.75,44.12 28.88,39.75 32.25,35.00
             33.62,32.62 36.00,28.12 36.00,28.12`, `M 35.00,29.88
           C 32.88,33.50 32.25,36.75 31.75,38.50
             31.38,44.38 38.62,37.38 38.62,37.38`, `M 30.62,21.00
           C 30.62,21.00 38.88,21.12 43.38,21.00`]},
   "5":{offset:[25,21],
        name:"զա/za",
        path:[`M 24.88,8.00
           C 27.62,0.00 18.00,-2.00 15.00,2.88
             11.75,6.38 10.88,8.88 9.12,12.25
             7.38,17.75 12.38,25.00 20.25,17.38
             23.25,13.00 23.12,12.12 24.88,8.00 Z`,`M 21.50,15.50
           C 15.25,25.00 14.38,28.25 7.25,34.62`,`
           M 2.50,29.12
           C -3.75,36.00 3.12,34.62 4.50,34.62
             5.75,34.62 10.88,34.50 13.88,34.38
             15.75,34.38 21.50,33.62 15.38,39.88`,`M 34.38,21.00
           C 24.62,38.25 33.75,38.88 43.88,21.00
             16.38,71.62 38.12,52.00 41.00,46.25`]},
    "6":{offset:[30,14],
         name:"է/ē",
         path:[`M 5.62,7.88
           C 13.38,-3.12 19.38,-2.12 16.25,6.12
             15.89,7.09 1.38,38.25 0.38,41.00
             10.75,39.75 12.25,49.50 3.50,51.38
             -1.50,50.12 11.50,37.25 11.50,37.25`,`M 9.50,20.75
           C 14.50,19.75 16.75,21.12 17.38,22.00
             22.00,25.00 22.38,23.25 24.00,21.38`,`M 38.50,8.00
           C 37.25,10.12 24.62,38.00 23.50,40.62
             37.88,43.75 28.12,50.88 25.62,51.50
             19.38,50.75 31.00,40.38 31.62,38.50`,`M 29.38,27.75
           C 29.38,27.75 41.38,27.75 41.38,27.75`]},
     "7":{offset:[13,42],
          name:"ըթ/ët'",
          path:[`M 27.75,0.62
           C 18.62,19.50 15.12,26.88 12.88,31.12
             6.25,37.62 1.38,35.00 0.50,31.75
             0.50,31.75 0.38,25.88 14.62,33.62
             25.38,39.25 30.88,32.00 30.88,32.00`,`M 22.00,12.38
           C 24.75,9.88 33.12,0.62 35.00,1.75
             38.00,2.38 35.75,6.38 34.25,9.00
             29.00,22.25 39.88,12.50 42.00,9.00`,`M 52.50,1.00
           C 49.62,6.38 41.88,23.38 39.88,27.75
             38.12,39.62 49.12,31.88 54.00,26.00`,`M 49.00,8.00
           C 64.25,-5.88 58.38,6.75 57.00,9.25
             52.62,21.38 65.25,9.38 65.25,9.38`]},
    "8":{offset:[20,21],
         name:"թօ/t'ò",
         path:[`M 9.38,8.75
           C 20.50,-2.50 25.12,-0.62 21.38,8.62
             15.38,21.00 7.25,38.75 0.75,53.12`,`M 19.25,12.62
           C 38.00,-8.12 35.88,4.88 35.88,5.25
             30.88,17.75 24.38,36.62 19.50,32.00
             15.00,27.88 19.62,22.38 22.50,21.75
             26.12,21.50 34.62,21.38 34.62,21.38`,`M 40.62,20.88
           C 40.62,20.88 26.00,53.00 26.00,53.00`,`M 36.88,29.00
           C 48.62,16.12 50.75,20.62 51.75,23.25
             53.25,27.12 46.00,36.25 43.62,33.62
             42.00,31.38 42.25,27.25 45.25,26.62
             49.38,26.50 51.62,26.38 54.62,26.38`]},
    "9":{offset:[27,22],
         name:"ժէ/žē",
         path:[`M 9.25,9.50
           C 22.75,-4.00 23.00,2.00 21.88,5.50
             19.88,10.75 12.38,26.62 10.62,28.75
             2.12,40.50 -1.38,29.25 0.88,25.38
             4.25,20.00 8.62,20.00 17.00,21.25
             19.62,21.62 22.75,21.12 23.88,20.00`,`M 45.62,1.00
           C 41.75,8.88 34.88,24.62 31.75,30.50
             27.62,37.88 20.00,32.00 23.00,26.50
             26.88,20.00 30.88,19.62 39.88,20.00
             42.25,20.00 43.88,19.00 44.88,18.12`]},
     "10":{offset:[23,13],
           name:"ինի/ini",
           path:[`M 9.62,12.00
           C 30.25,-9.12 26.38,3.38 25.62,5.75
             24.12,9.00 1.62,57.88 0.38,60.75`, `M 12.00,35.00
           C 15.38,31.38 15.62,31.00 18.50,28.62
             24.25,25.50 23.75,30.75 22.25,33.75
             15.25,45.88 24.62,42.00 27.75,36.25`,`M 48.00,7.88
          L 23.62,61.25 `,`M 35.50,35.12
           C 39.00,31.62 39.50,30.75 42.00,29.12
             45.75,27.12 46.75,29.62 45.62,33.25
             38.50,48.12 49.25,40.62 51.50,36.50`]},
      "11":{offset:[20,44],
            name:"լիւն/liwn",
            path:[`M 28.12,1.00
           C 26.00,6.12 16.62,25.88 15.25,29.12
             11.75,37.25 -0.12,36.75 0.12,32.62
             1.12,25.75 14.12,31.50 17.88,32.75
             22.25,34.38 26.00,31.38 27.38,29.75`,`M 47.62,1.00
           C 42.12,12.50 37.12,23.38 34.25,29.62
             31.62,40.38 43.50,31.88 47.00,25.62`]},
       "12":{offset:[13,22],
             name:"խէ/xē",
             path:[`M 9.50,9.62
           C 24.88,-8.50 24.25,3.38 23.12,5.88
             19.50,13.38 1.12,54.00 1.12,54.00`,`M 11.50,31.00
           C 14.38,27.88 16.62,25.25 19.50,23.12
             23.62,20.00 24.75,21.62 23.12,24.88
             15.88,39.38 23.75,33.00 29.25,27.62`,`M 32.50,21.62
           C 21.38,42.00 36.88,31.62 35.12,29.75`,`M 58.00,1.62
           C 58.00,1.62 34.50,54.12 34.50,54.12`,`M 45.12,30.12
           C 45.12,30.12 50.62,23.62 53.38,21.62
             57.50,18.38 56.00,23.25 55.12,25.25
             47.62,41.25 58.88,30.75 61.88,27.38`,`M 64.88,21.25
           C 53.75,42.62 67.00,31.00 67.75,29.12`]},
       "13":{offset:[30,22],
             name:"ծա/ça",
             path:[`M 17.00,16.38
           C 18.88,11.38 15.75,2.75 7.50,10.12
             0.50,18.50 1.00,20.00 0.00,26.50
             0.00,35.50 6.62,34.00 10.12,29.88
             13.62,25.12 13.75,25.50 17.00,16.38 Z`,`
           M 7.38,0.50
           C 2.88,9.62 5.88,7.00 13.00,7.12
             22.88,7.00 25.50,6.25 23.50,11.25`,`M 25.50,16.12
           C 41.50,10.25 43.12,5.50 43.12,2.75
             43.00,-2.12 36.75,1.00 36.00,4.62
             36.00,10.00 36.75,14.62 36.50,21.50
             32.88,31.50 27.38,34.00 24.75,34.00
             19.12,32.88 23.25,26.00 25.38,23.25
             28.00,20.00 36.25,21.25 43.00,21.00`]},
         "14":{offset:[30,22],name:"կեն/ken",
               path:[`M 1.00,9.88
           C 15.50,-5.88 14.38,3.25 13.12,5.25
             13.12,5.25 5.00,22.25 3.50,25.62
             -2.38,39.38 8.50,32.12 14.38,25.50`,`M 16.50,21.00
           C 16.50,21.00 1.38,53.75 1.38,53.75`,`M 35.62,1.12
           C 33.00,6.50 26.88,19.62 24.12,25.50
             19.38,37.00 27.00,33.50 32.12,27.38`,`M 35.25,21.00
           C 33.62,24.38 22.88,48.00 20.50,54.00`]},
          "15":{offset:[28,19],name:"հօ/hò",path:[`M 1.12,10.00
           C 17.62,-7.00 15.00,4.62 14.00,7.25
             12.38,11.00 2.75,32.00 0.75,36.00`,`M 5.00,26.62
           C 5.00,26.62 8.50,23.88 11.25,22.00
             14.88,19.75 16.62,22.00 16.00,24.12
             14.38,27.75 13.88,28.38 12.75,31.50
             10.38,40.75 18.88,32.88 20.62,29.88`,`M 40.00,1.12
           C 40.00,1.12 23.88,36.00 23.88,36.00`,`M 27.88,27.12
           C 30.00,25.00 31.88,23.75 34.50,22.00
             37.75,19.50 39.00,22.75 37.38,25.50
             35.50,29.25 36.00,28.25 34.25,32.38
             33.25,39.50 39.75,34.00 42.62,29.25`]},
          "16":{offset:[25,21],name:"ձա/ja",path:[`M 23.75,6.25
           C 23.25,3.62 20.75,-2.00 13.38,2.88
             10.82,5.00 9.38,8.00 7.88,12.88
             6.38,22.00 15.25,22.38 18.88,18.62
             22.38,13.88 24.00,12.00 23.75,6.25 Z`,`M 22.38,13.75
           C 19.75,20.75 14.75,27.00 12.38,30.25
             9.12,33.62 1.50,36.00 1.00,31.25
             1.12,26.25 11.25,27.62 14.12,31.88
             18.62,37.00 23.38,30.50 23.38,30.50`,`
           M 40.75,15.75
           C 38.62,19.25 39.50,17.88 37.75,21.00
             39.38,21.12 42.62,21.00 44.88,21.00
             41.00,24.50 35.62,29.00 30.12,33.62
             36.66,29.81 39.88,31.38 39.12,34.88
             34.38,48.00 33.00,53.38 25.88,54.12
             22.25,54.12 25.38,45.50 31.88,40.88
             35.12,38.38 42.25,33.00 44.62,31.12`]},
           "17":{offset:[20,43],name:"ղատ/ġat",path:[`M 17.62,0.88
           C 17.62,0.88 12.38,11.75 11.50,13.62`,`M 13.62,9.12
           C 25.38,-3.38 28.12,0.75 26.12,6.62
             22.62,13.88 18.88,21.50 15.00,28.25
             9.38,36.88 0.75,35.12 1.12,32.12
             1.87,25.42 14.88,32.12 18.88,33.12
             21.88,34.00 24.88,30.50 25.88,29.12`,`M 40.00,0.88
           C 40.00,0.88 35.50,9.88 33.88,13.62`,`M 36.12,9.00
           C 48.75,-4.12 49.25,2.00 46.38,8.25
             43.00,14.75 38.12,24.50 36.88,27.88
             32.07,41.22 44.37,31.79 47.76,26.93`]},
          "18":{offset:[25,20],name:"ճէ/č̣ē",path:[`M 8.25,8.75
           C 11.75,5.00 14.00,4.12 16.62,2.38
             23.62,-0.75 20.88,4.00 20.00,6.38
             18.50,9.62 8.25,32.38 7.00,36.00
             11.62,33.25 15.50,33.75 16.75,36.00
             21.25,32.88 23.75,26.88 22.62,23.00
             20.50,17.25 9.50,16.75 5.38,18.88
             -4.12,25.00 2.62,28.88 8.25,23.38`,`M 45.50,1.00
           C 45.50,1.00 31.50,31.75 30.00,36.00
             34.50,33.00 38.50,33.75 39.25,36.00
             44.25,31.38 45.12,28.50 44.62,24.75
             43.50,20.75 33.62,21.12 29.00,23.75`]},
          "19":{offset:[25,20],name:"մեն/men",path:[`M 0.25,26.50
           C 6.88,20.62 12.50,18.00 8.38,26.38
             0.62,44.12 15.75,29.50 19.25,24.50`,`M 29.88,1.00
           C 29.88,1.00 14.62,35.00 14.62,35.00`,`M 27.12,7.25
           C 41.62,-6.38 36.88,5.75 36.25,7.38
             30.12,20.25 39.38,14.88 42.38,12.25`,`M 33.38,21.62
           C 32.38,23.32 30.38,27.00 29.38,31.88
             30.12,36.50 34.12,35.00 36.75,32.25
             40.25,28.38 48.25,8.50 50.50,3.38
             52.50,0.00 57.88,0.00 57.88,2.50
             51.75,14.75 58.50,11.12 62.12,7.62`]},
          "20":{offset:[25,25],name:"յի/yi",path:[`M 15.38,8.62
           C 26.12,-2.12 30.88,-1.38 31.00,5.00
             28.54,13.02 18.00,18.75 13.25,21.50
             19.38,18.75 20.25,22.00 20.75,24.25
             22.00,30.50 5.75,57.38 1.38,53.62
             -4.75,47.88 11.38,30.50 27.00,24.12`,`M 41.25,20.25
           C 33.12,39.25 25.62,58.38 20.62,53.00
             16.62,48.75 35.75,35.00 42.38,30.25`]},

         "21":{offset:[28,21],name:"նու/now",path:[`M 2.88,11.25
           C 11.75,2.75 10.50,1.00 8.50,1.00
             3.50,1.00 4.50,6.50 5.38,8.12
             6.75,9.75 9.38,9.12 11.50,8.12
             8.38,14.38 3.50,24.25 1.00,30.88
             -1.62,39.38 9.75,31.12 11.50,28.00`,`M 15.12,21.12
           C 12.75,25.75 12.88,25.62 10.25,30.75
             7.38,37.12 12.75,36.00 18.62,29.50`,`M 30.88,1.00
           C 25.75,9.50 31.75,8.38 35.25,7.25
             33.12,11.88 26.12,26.12 24.38,30.25
             21.75,38.00 28.88,35.00 34.50,27.25`,`M 37.12,21.88
           C 36.00,24.00 35.00,26.25 33.00,30.88
             30.62,37.50 36.88,35.00 41.00,29.12`]},

           "22":{offset:[30,22],name:"շա/ša",path:[`M 18.00,5.88
           C 6.25,6.38 -5.38,24.00 3.25,32.62
             8.50,37.38 15.00,26.50 16.38,22.00`,`M 1.38,4.38
           C 6.25,-1.62 12.38,-1.12 15.88,4.12
             19.50,9.62 28.00,4.25 29.62,2.00`,`M 21.25,28.88
           C 34.30,15.71 35.50,20.00 33.88,24.25
             32.12,28.25 24.50,43.00 22.75,47.25
             20.50,60.25 30.88,51.50 35.75,44.12`]},

            "23":{offset:[27,21],name:"ո/vo",path:[`M 2.25,8.75
           C 4.62,6.38 6.38,4.25 8.62,2.00
             12.50,-1.62 15.25,1.00 14.25,4.50
             11.62,10.00 -0.25,34.00 -0.25,34.00`,`M 9.50,13.88
           C 15.38,6.88 17.75,4.75 20.38,2.00
             24.50,-1.88 27.75,1.00 25.80,5.00
             24.50,7.50 16.50,23.25 14.50,28.38
             11.75,39.38 22.50,31.75 23.75,28.38`,`M 31.88,20.50
           C 31.88,20.50 25.25,34.00 25.25,34.00`,`M 28.62,27.12
           C 28.62,27.12 32.38,24.25 35.25,21.88
             41.62,17.75 39.00,24.62 37.88,26.00
             31.50,37.00 38.50,35.12 43.88,29.00`]},

           "24":{offset:[30,30],name:"չա/ča",path:[`M 23.75,12.50
           C 25.25,9.75 26.12,7.62 25.62,5.25
             25.00,2.00 20.47,-2.58 13.62,1.88
             9.62,5.12 8.25,8.25 7.62,11.25
             7.12,17.38 11.88,20.25 15.88,18.38
             19.50,16.38 22.02,15.36 23.75,12.50 Z`,`
           M 24.75,10.25
           C 19.75,22.50 12.50,25.38 7.12,30.50`,`M 0.38,26.00
           C 0.38,26.00 10.88,32.88 13.62,34.75`,`M 33.77,19.02
           C 29.38,27.50 33.22,26.00 37.12,26.12
             33.88,33.25 29.62,42.25 27.00,48.38
             24.75,53.62 32.62,56.00 40.12,44.25`]},

           "25":{offset:[25,22],name:"պէ/pē",path:[`M 0.25,5.75
           C 9.25,-3.75 11.75,0.25 8.88,6.75
             7.25,10.50 7.38,10.00 2.88,19.62`,`M 7.88,8.38
           C 19.38,-5.00 20.62,1.25 19.62,4.12
             16.38,10.75 6.25,33.00 6.25,33.00`,`M 16.75,10.62
           C 28.88,-5.50 30.38,1.38 29.75,3.88
             28.62,7.25 7.12,54.00 7.12,54.00`,`M 36.12,20.00
           C 31.00,29.25 30.00,31.38 32.75,33.00
             34.38,34.00 39.12,29.88 39.75,27.62`,`M 43.50,20.00
           C 38.12,30.38 38.75,30.25 40.75,33.00
             42.62,33.00 46.62,30.50 47.50,28.25`,`M 51.12,20.00
           C 51.12,20.00 36.12,54.00 36.12,54.00`]},

         "26":{offset:[25,41],name:"ջէ/ǰē",path:[`M 19.38,10.38
           C 19.75,9.75 21.25,7.50 21.25,4.00
             21.38,1.00 17.75,-1.62 13.00,1.62
             10.88,4.12 9.88,6.00 8.25,10.12
             7.38,14.25 11.00,16.00 13.62,16.00
             15.00,16.12 18.00,12.88 19.38,10.38 Z`,`
           M 22.88,1.00
           C 19.75,10.00 14.12,25.00 12.50,29.88
             9.62,36.12 0.12,36.25 0.38,32.62
             1.00,28.88 9.88,32.50 13.88,34.00
             17.12,35.62 18.38,35.00 19.75,32.62`,`
           M 38.62,10.38
           C 40.12,7.62 40.50,7.25 40.75,4.00
             40.50,2.62 38.25,-1.00 33.38,2.62
             31.00,4.50 29.75,7.00 28.25,10.12
             27.12,14.00 30.38,16.00 33.00,16.00
             35.50,14.75 36.75,12.62 38.62,10.38 Z`,`M 39.38,8.88
           C 39.38,8.88 31.50,24.38 29.25,30.00
             27.50,39.38 35.50,33.75 41.00,25.62`]},

           "27":{offset:[25,22],name:"ռա/ṙa",path:[`M 0.38,8.38
           C 17.64,-7.38 14.12,4.12 13.12,6.62
             10.25,12.50 2.88,27.00 -0.25,34.00`,`M 10.38,12.00
           C 26.38,-8.62 26.12,3.25 24.62,7.00
             21.75,13.62 13.50,29.88 11.75,34.00
             15.62,29.75 18.12,31.12 19.62,32.88
             22.00,35.50 26.25,32.38 26.50,30.88`,`M 36.38,20.00
           C 36.38,20.00 30.62,31.38 29.38,34.00`,`M 34.25,24.00
           C 45.25,16.12 43.25,22.75 42.38,25.12
             39.75,31.12 40.50,28.88 38.38,34.00
             40.62,31.88 42.50,30.25 43.88,31.88
             46.00,35.88 48.00,32.88 49.50,31.00`]},
           "28":{offset:[27,21],name:"սէ/sē",path:[`M 2.25,8.75
           C 24.88,-14.25 5.38,19.62 1.75,28.50
             -3.12,43.25 13.25,24.12 16.12,21.00`,`M 25.75,1.00
           C 23.25,7.12 16.12,21.00 13.12,27.75
             9.38,39.75 18.12,31.62 23.50,26.38`,`M 32.88,21.00
           C 32.29,22.28 29.25,27.50 27.88,30.88
             25.38,38.38 35.25,30.38 39.25,24.75`,`M 41.12,21.00
           C 39.38,24.38 37.75,27.00 36.12,30.88
             34.25,37.00 40.38,32.88 44.62,27.50`]},
           "29":{offset:[19,22],name:"վեւ/vew",path:[`M 4.12,27.50
           C 16.50,15.75 18.00,20.00 14.00,27.50
             9.00,37.88 20.50,31.50 26.12,23.38`,`M 37.00,0.00
           C 35.88,2.75 17.12,43.38 14.25,47.88
             12.75,50.38 2.00,57.38 0.88,51.50
             0.75,47.88 11.62,48.12 15.12,52.00
             19.25,57.12 22.50,50.75 23.88,49.62`,`M 37.62,20.00
           C 27.12,42.50 41.38,30.25 43.88,24.62`,`M 55.75,0.00
           C 52.75,6.00 37.12,39.75 34.00,46.62
             29.62,60.38 40.38,52.12 46.62,44.25`]},
           "30":{offset:[15,21],name:"տիւն/tiwn",path:[`M 0.00,8.50
           C 14.62,-5.25 14.62,1.00 12.12,6.50
             8.12,15.00 4.00,23.12 2.00,27.88
             -2.00,38.50 7.38,33.75 16.12,22.38`,`M 26.62,0.00
           C 26.62,0.00 10.75,34.00 10.75,34.00`,`M 21.50,10.62
           C 32.62,-2.38 39.25,-3.38 34.38,7.25
             30.75,14.38 25.88,25.12 24.88,27.50
             21.50,35.25 26.62,37.25 33.38,27.00`,`M 42.00,20.00
           C 40.75,23.00 39.12,25.62 37.75,28.75
             33.12,38.50 42.88,32.00 47.88,25.75`,`M 50.75,20.00
           C 50.75,20.00 34.50,54.38 34.50,54.38`,`M 47.88,25.88
           C 56.50,17.88 60.12,17.88 56.00,27.12
             50.88,38.25 58.75,34.00 63.75,27.12`]},
           "31":{offset:[18,22],name:"րէ/rē",path:[`M 9.25,8.62
           C 22.11,-4.34 25.50,-1.00 21.50,8.12
             19.38,12.75 0.12,54.00 0.12,54.00`,`M 19.75,11.38
           C 28.62,-0.12 37.38,-4.12 33.88,5.62
             31.88,10.50 25.00,23.88 23.88,26.00
             20.12,33.00 24.25,37.62 34.12,24.88`,`M 44.00,19.00
           C 44.00,19.00 27.75,54.00 27.62,54.00`,`M 39.62,28.00
           C 48.00,19.00 55.38,14.62 50.25,25.88
             43.62,39.12 55.12,30.38 57.25,25.88`]},

           "32":{offset:[25,16],name:"ցօ/c'ò",path:[`M 2.62,14.88
           C 11.46,4.44 18.62,4.25 16.12,10.38
             13.50,15.88 7.62,28.12 5.12,34.00
             2.12,41.12 9.88,42.00 20.38,26.00`,`M 29.88,6.00
           C 27.25,11.25 18.12,30.75 13.00,42.75
             6.38,59.00 4.50,61.00 1.62,61.00
             -2.25,61.00 -1.00,46.00 21.38,36.12`,`M 34.88,26.00
           C 32.62,30.25 32.25,31.62 30.25,36.38
             29.50,41.12 36.00,39.00 41.62,31.38`,`M 44.25,26.00
           C 41.50,31.38 36.50,42.50 34.12,47.88
             29.62,58.88 28.88,61.00 25.88,61.00
             20.88,61.00 26.00,47.25 45.12,37.50`]},
           "33":{offset:[15,22],name:"հիւն/hiwn",path:[`M 1.00,7.88
           C 11.38,-2.88 15.00,-1.12 13.50,5.12
             10.12,12.50 0.62,33.00 0.62,33.00`,`M 10.62,11.38
           C 20.75,-1.50 27.25,-2.75 25.00,5.12
             23.75,8.25 15.88,23.50 14.00,27.62
             11.25,34.25 16.25,35.75 24.25,25.75`,`M 27.62,20.00
           C 26.62,21.50 22.25,29.25 20.25,33.00
             25.12,29.12 26.12,30.62 27.12,32.00
             28.50,33.00 28.75,34.25 31.88,30.25`,`M 41.50,20.00
           C 41.50,20.00 36.38,30.62 35.38,33.00`,`M 38.50,26.50
           C 45.12,18.50 48.62,19.00 48.38,22.75
             47.00,26.12 46.75,26.88 45.50,29.62
             43.12,34.50 48.62,34.62 54.25,26.50`,`M 57.25,20.00
           C 57.25,20.00 52.88,30.25 51.62,33.00
             53.62,30.75 55.25,30.25 57.38,31.50
             60.25,33.00 59.62,34.25 63.12,30.62`]},
           "34":{offset:[16,21],name:"փիւր/p'iwr",path:[`M 0.38,26.50
           C 12.25,16.88 12.50,22.12 8.88,27.25
             3.62,35.75 11.75,36.50 18.00,26.75`,`M 30.00,1.00
           C 29.25,2.75 6.00,52.38 4.75,55.00`,`M 18.12,26.88
           C 26.62,18.62 30.12,20.00 26.75,26.00
             20.12,37.00 29.62,35.12 32.62,30.12`,`M 41.88,21.00
           C 40.88,23.25 39.00,27.50 37.62,30.38
             35.88,36.25 43.38,34.00 47.00,28.25`,`M 59.75,1.00
           C 59.75,1.00 34.75,55.00 34.75,55.00`,`M 47.00,28.25
           C 55.88,18.88 60.62,19.00 55.12,28.25
             51.12,35.75 56.62,36.50 62.75,28.62`]},
           "35":{offset:[21,22],name:"քէ/k'ē",path:[`M 20.75,9.25
           C 19.88,11.88 19.00,13.88 19.50,16.62
             20.50,20.00 25.00,21.25 28.88,18.25
             30.38,17.12 33.75,11.88 35.00,8.00
             36.62,2.50 31.50,-2.38 25.88,1.88
             23.50,3.62 22.12,5.25 20.75,9.25 Z`,`
           M 21.62,7.12
           C 21.62,7.12 0.50,54.00 0.50,54.00`,`M 4.00,28.75
           C 0.00,34.00 3.62,33.00 10.00,33.00
             26.38,33.00 24.62,32.75 21.38,39.88`,`M 53.50,0.00
           C 53.50,0.00 28.50,54.00 28.50,54.00`,`M 41.12,26.75
           C 41.00,22.00 36.25,22.38 35.12,24.00
             29.38,33.00 44.50,36.00 50.50,29.38`]},
      
          "36":{offset:[40,21],name:"և/jew",path:[`M 13.62,0.38
           C 11.88,3.75 2.62,24.38 1.00,28.00
             -0.62,32.12 -0.62,40.38 12.38,24.75`,`M 14.88,20.00
           C 14.00,21.75 9.38,30.75 8.00,34.00
             10.12,32.00 12.38,30.88 14.12,31.75
             16.62,34.00 18.88,35.12 21.25,31.12`]},

          "37":{offset:[30,22],name:"օ/ò",path:[`M 21.38,15.62
           C 23.00,10.38 23.75,8.62 22.62,3.00
             21.88,0.00 18.50,-1.38 11.88,3.62
             5.88,9.50 3.38,14.88 0.50,21.50
             -1.88,29.38 3.50,38.88 11.88,30.62
             15.25,27.25 19.00,22.25 21.38,15.62 Z`,`
           M 22.62,4.12
           C 19.38,10.25 24.38,11.75 32.12,4.00`,`M 39.75,27.25
           C 40.50,23.88 39.88,21.00 37.50,20.88
             34.88,20.88 33.25,21.62 31.38,23.38
             28.00,27.62 28.25,31.38 28.88,32.62
             29.75,35.12 33.88,34.00 35.88,32.38
             37.88,30.25 38.00,30.25 39.75,27.25 Z`,`
           M 39.12,22.12
           C 39.38,26.25 44.50,23.75 46.38,21.12`]},

          "38":{offset:[24,18],name:"ֆէ/fē",path:[`M 26.50,1.00
           C 26.50,1.00 1.50,55.00 1.50,55.00`,`M 26.50,1.00
           C 16.25,3.88 10.62,14.50 18.25,18.62
             29.88,25.00 22.75,34.75 9.75,37.00
             6.50,37.00 -2.38,33.00 1.50,27.25
             3.75,24.00 10.75,24.75 9.12,29.50`,`M 51.62,1.00
           C 51.62,1.00 30.75,46.38 26.88,55.00`,`M 51.62,1.00
           C 40.62,2.38 37.38,12.75 43.75,17.75
             53.75,25.12 49.62,36.00 35.12,37.00
             32.62,37.00 29.25,33.88 28.00,31.00`]}
          
}
