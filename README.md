리빙랩 와이파이 개인정보동의 페이지


Edit config
  1. server.py
  2. npm - Wifi-main 최종/package.json

"작성중"

MQTT 실행

WINDOW에서 진행

mosquitto 사이트에서 64비트용 다운 http://mosquitto.org/download/
MAC에서 진행

설치 brew install mosquitto

실행 brew services start mosquitto

중지 brew services stop mosquitto

재실행 brew services restart mosquitto

MQTT 서버에 접근하기 위한 절차

config 파일내용 작성 sudo vim /etc/mosquitto/mosquitto.conf (경로주의 mosquitto 파일이 설치된 경로를 찾아야 함.)
<작성>

password_file /etc/mosquitto/passwd

#allow_anonymous

port 1883

password_file /usr/local/etc/mosquitto/password

비밀번호 파일 내용 작성 sudo vim /etc/mosquitto/passwd
<작성>

username:

password:

1883포트 열기
4)sub.py 코드와 통신확인
