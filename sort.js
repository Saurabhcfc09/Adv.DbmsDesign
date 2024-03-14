@@ -0,0 +1,8 @@
db.zips.aggregate([
    {
    $sort: {
            pop: -1
        }
    }
    ])
