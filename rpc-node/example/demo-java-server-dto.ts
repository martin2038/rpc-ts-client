/**
* GENERATED BY BTYX RPC GEN - LESS MODIFY BY HAND
* demo-java-server-dto.ts  2022-11-29T11:55:28+08:00
*/

import {
    IsInt,
    Length,
    IsEmail,
    IsFQDN,
    IsDate,
    IsArray,
    Min,
    Max,
    IsOptional,
    IsDefined,
    IsNotEmpty,
    MinLength,
    MaxLength,
    ArrayMinSize,
    ArrayMaxSize,
    IsPositive,
    IsNegative,
  } from 'class-validator';
  
  export const APP = 'demo-java-server';
  
  export class  Img {
  
  
      // 新增为null， 编辑不可空
      @Length(1, 2147483647)
      @IsOptional()
      id?: string;
  
  
      // 为null表示删除掉,最大100kb
      @ArrayMinSize(1024)@ArrayMaxSize(102400)
      @IsOptional()
      img?: Array<number>;
  
  
      // 测试int[]数组
      @ArrayMinSize(1024)@ArrayMaxSize(102400)
      @IsOptional()
      intArray?: Array<number>;
  
  
      // 测试List<int>
      @ArrayMinSize(1)@ArrayMaxSize(100)
      @IsOptional()
      intList?: Array<number>;
  
  
      // 测试Map<String,String>
      @IsOptional()
      strMap?: Record<string,string>;
  }
  
  export class  User {
  
  
      id?: number;
  
  
      name?: string;
  
  
      stat?: UserStatus;
  }
  
  /**
   *用户状态枚举值
   */
  export const enum UserStatus {
      NORMAL = "NORMAL",
      BLOCKED = "BLOCKED",
      VIP = "VIP"
  }
  
  /**
   *测试请求
   */
  export class  TimeReq {
  
  
      // 姓名
      @MinLength(1)
      @Length(0, 10)
      name: string;
  
  
      // 年龄
      @IsDefined()
      @Min(1)
      @Max(80)
      age: number;
  
  
      test?: string;
  
  
      test1?: Array<number>;
  
  
      test2?: Array<User>;
  
      constructor(name: string,age: number) {
          this.name = name;
          this.age = age;
      }
  }
  
  export interface  TimeResult {
  
  
      time: string;
  
  
      //@IsDefined()
      timestamp: number;
  
  
      //// 会被序列化为毫秒时间戳
      date: number;
  }
  
  