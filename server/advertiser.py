import asyncio
import json
import random


class Advertiser:
    def __init__(self):
        self.temp = 0
        self.clients = dict()

    async def init_adv(self):
        print('Advertiser has been ready')
        asyncio.create_task(self.runAdvertiser())
        print('advertiser is running')

    async def addClient(self, cl_socket):
        if cl_socket.id in self.clients.keys():
            print(cl_socket.origin, 'is already added')
        else:
            self.clients[cl_socket.id] = cl_socket

    async def printClients(self):
        for idx, cli in enumerate(self.clients.values()):
            print(idx, cli.origin, cli.id)

    async def runAdvertiser(self):
        cnt = 0
        piclist = ['https://cdn.imweb.me/upload/S201910012ff964777e0e3/62f9a36ea3cea.jpg']
        while True:
            for idx, cli in enumerate(self.clients.values()):
                #여기에 사진 링크 보내면 될듯
                data_string = json.dumps(piclist)
                await cli.send(data_string)
                #print(idx, cli.origin, 'data sended', data_string)
            cnt += 1
            #1초 주기로 데이터 변경됨 -> 주기 변경 가능
            await asyncio.sleep(1)