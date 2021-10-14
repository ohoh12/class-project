var oScript = document.createElement("script");
                oScript.type = "text/javascript";
                oScript.src = "//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js";
                document.getElementsByTagName("head")[0].appendChild(oScript);
                        function led_on() {
                                var result = document.querySelector(".result");
                                var data = "LED ON";
                                result.innerHTML = data;
                                alert(data);

                                $.ajax({
                                        type: 'GET',
                                        url:'/led/on',
                                        success: function(res) {
                                                alert(res)
                                        }
                                })
                        }

                        function led_off() {
                                var result = document.querySelector(".result")
                                var data = "<h3>LED OFF</h3>"
                                result.innerHTML = data;
                                alert(data)
            $.ajax({
                                        type: 'GET',
                                        url: '/led/off',
                                        success: function(res) {
                                                alert(res)
                                        }
                                })
                        }