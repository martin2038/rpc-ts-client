/**
* GENERATED BY BTYX RPC GEN - LESS MODIFY BY HAND
* demo-service.ts  2022-11-29T11:42:54+08:00
*/
import {R,RpcService,Meta as M,PagedQuery,PagedList} from '@btyx/rpc-base';

import {Img,User,TimeReq,TimeResult} from './demo-java-server-dto';

///  这是个例子, Demo，用来演示客户端调用
export class DemoService{

	readonly s = "Demo/";

	constructor(readonly r: RpcService) {}
	
	hello(d:TimeReq, m?: M): R<TimeResult>{
		return this.r.async(this.s+"hello",d,m);
	}
	
	helloFake( h?: M): R<TimeResult>{
		return this.r.async(this.s+"helloFake",h);
    }

	bytesTime(h?: M): R<Uint8Array>{
		return this.r.async(this.s+"bytesTime",null,h);
	}

	
	inc100(d:number, m?: M): R<number>{
		return this.r.async(this.s+"inc100",d,m);
	}
	
	listInt(d:PagedQuery<number>, m?: M): R<PagedList<number>>{
		return this.r.async(this.s+"listInt",d,m);
	}
	
	listUser(d:Array<User>, m?: M): R<Array<User>>{
		return this.r.async(this.s+"listUser",d,m);
	}
	
	listUser2(d:Array<User>, m?: M): R<PagedList<User>>{
		return this.r.async(this.s+"listUser2",d,m);
	}
	
	plistUser(d:PagedQuery<User>, m?: M): R<PagedList<User>>{
		return this.r.async(this.s+"plistUser",d,m);
	}
	
	plistUser2(d:PagedQuery<User>, m?: M): R<Array<User>>{
		return this.r.async(this.s+"plistUser2",d,m);
	}
	
	save(d:User, m?: M): R<string>{
		return this.r.async(this.s+"save",d,m);
	}
	
	saveImg(d:Img, m?: M): R<number>{
		return this.r.async(this.s+"saveImg",d,m);
	}
	
	sleep(d:number, m?: M): R<number>{
		return this.r.async(this.s+"sleep",d,m);
	}
	
	str(d:string, m?: M): R<string>{
		return this.r.async(this.s+"str",d,m);
	}
	
	testMap(m?: M): R<Record<string,number>>{
		return this.r.async(this.s+"testMap",null,m);
	}
	// 调用这个接口服务端会抛出RuntimeException
	testRuntimeException(m?: M): R<number>{
		return this.r.async(this.s+"testRuntimeException",null,m);
	}
	
	wordLength(d:Array<string>, m?: M): R<Array<number>>{
		return this.r.async(this.s+"wordLength",d,m);
	}

}
