require.config({
    baseUrl: '../../../js',
    paths: {
        'jquery': 'jquery/jquery-1.9.1',
        'eve': 'raphael/eve',
        'raphael-core': 'raphael/raphael.core',
        'raphael-svg': 'raphael/raphael.svg',
        'raphael-vml': 'raphael/raphael.vml',
        'raphael': 'raphael/raphael.amd'
    }
});

requirejs (
    [
        'raphael'
    ],
    function (Raphael) {
        var rsr = Raphael('rsr', '1200', '1200');

        function rabbitLogo(x,y) {
            var bodyLayer = rsr.set();

            var whitePath = rsr.path(" M 75.86 58.81 C 80.32 56.90 85.25 57.17 89.99 57.21 C 108.01 57.26 126.03 57.19 144.05 57.23 C 152.31 57.40 159.51 62.47 164.61 68.65 C 167.98 " +
                "73.38 169.80 79.14 169.80 84.95 C 169.77 134.65 169.80 184.36 169.78 234.07 C 169.41 237.56 171.74 240.34 174.15 242.52 C 176.73 244.24 180.00 244.11 182.97 244.23 " +
                "C 200.00 244.13 217.03 244.30 234.05 244.16 C 239.02 244.37 244.07 240.97 244.95 235.93 C 244.92 186.95 244.98 137.95 244.93 88.96 C 244.89 83.20 245.19 77.20 247.97 " +
                "72.02 C 252.45 63.23 262.07 57.03 272.02 57.20 C 291.35 57.27 310.68 57.23 330.02 57.22 C 336.29 57.21 342.36 59.95 347.03 64.05 C 352.32 68.37 354.92 74.89 356.39 " +
                "81.38 C 356.73 132.59 356.40 183.81 356.56 235.02 C 356.51 236.81 357.47 238.37 358.22 239.93 C 360.49 243.56 365.05 244.28 369.00 244.22 C 417.99 244.19 466.99 244.21 " +
                "515.99 244.20 C 523.09 243.96 530.04 247.01 535.04 251.98 C 540.02 256.49 542.11 263.02 543.60 269.37 C 543.63 350.90 543.58 432.43 543.62 513.97 C 544.52 526.65 534.94 " +
                "538.73 522.83 541.92 C 518.67 543.14 514.30 542.72 510.03 542.79 C 370.36 542.78 230.69 542.79 91.01 542.79 C 86.69 542.71 82.25 543.19 78.07 541.82 C 67.56 538.90 59.10 " +
                "529.37 57.87 518.48 C 57.84 382.33 57.88 246.19 57.86 110.05 C 58.39 100.70 57.42 91.34 57.96 81.99 C 58.38 76.24 61.02 70.87 64.57 66.41 C 68.00 63.42 71.52 60.37 75.86 " +
                "58.81 Z");
            whitePath.attr({fill: '#ffffff','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_d');
            bodyLayer.push(whitePath);

            var body = rsr.path(" M 66.72 84.88 C 66.90 75.59 74.50 66.71 84.01 66.39 C 103.36 66.29 122.71 66.36 142.06 66.35 C 151.99 65.87 161.01 75.08 160.62 84.96 C 160.62 134.65 " +
                "160.63 184.34 160.61 234.03 C 160.05 244.11 169.00 253.15 179.01 253.20 C 197.99 253.20 216.99 253.25 235.97 253.18 C 245.77 252.83 254.21 243.96 253.84 234.13 C 253.85 " +
                "184.05 253.84 133.97 253.85 83.89 C 254.07 74.54 262.51 66.05 271.96 66.36 C 291.32 66.34 310.67 66.32 330.03 66.37 C 339.69 66.48 347.72 75.64 347.52 85.14 C 347.58 135.42 " +
                "347.51 185.71 347.55 235.99 C 348.03 245.39 356.66 253.19 366.00 253.20 C 416.01 253.22 466.02 253.20 516.03 253.21 C 525.60 253.01 534.13 261.47 534.37 270.95 C 534.28 " +
                "353.30 534.45 435.65 534.28 518.00 C 532.71 526.50 524.95 533.95 516.00 533.64 C 372.66 533.68 229.32 533.65 85.98 533.65 C 75.75 534.35 66.92 525.12 66.73 515.12 C 66.73 " +
                "371.71 66.74 228.29 66.72 84.88 Z");
            body.attr({fill: '#f57b20','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_f');
            bodyLayer.push(body);

            var eye = rsr.path(" M 370.26 347.19 C 372.80 346.59 375.42 346.81 378.01 346.79 C 390.01 346.78 402.01 346.81 414.00 346.78 C 423.68 347.07 432.85 352.99 437.37 361.51 C 439.94 366.23 " +
                "440.74 371.67 440.66 376.99 C 440.60 388.86 440.76 400.75 440.58 412.63 C 440.58 423.07 434.01 433.10 424.49 437.37 C 420.36 439.55 415.67 439.61 411.16 440.24 C 399.73 440.22 388.31 " +
                "440.23 376.89 440.24 C 373.21 439.51 369.34 439.80 365.85 438.26 C 355.35 434.67 347.73 424.11 347.53 413.03 C 347.55 399.69 347.52 386.35 347.55 373.01 C 348.03 360.54 358.03 349.35 " +
                "370.26 347.19 Z");
            eye.attr({fill: '#fefefe','stroke-width': '0','stroke-opacity': '1'}).data('id', 'path_k');

            bodyLayer.transform("t"+x+","+y+"t-280,-280s0.08");
            eye.transform("t"+x+","+y+"t-280,-280t-85,-85s0.08");

            rsr.text(x+62, y+41/3, "Pivotal").attr({'font-size': '11px', 'font-family': 'Arial', 'font-weight': 'bold'});
            rsr.text(x+85, y+2*(41/3), "RabbitMQ node").attr({'font-size': '11px', 'font-family': 'Arial', 'font-weight': 'bold'});
        }

        rabbitLogo(100,100)

    });


