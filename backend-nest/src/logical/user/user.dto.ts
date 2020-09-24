import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class RegisterInfoDTO {
    @IsNotEmpty({ message:'用户名不能为空'})
    readonly username: string | number;
    @IsNotEmpty({ message:'真实姓名不能为空 '})
    @IsString({ message:'真实姓名必须是String类型' })
    readonly realname: string;
    @IsNotEmpty({ message:'密码不能为空' })
    readonly password: string;
    @IsNotEmpty({ message:'重复密码不能为空' })
    readonly repassword: string;
    @IsNotEmpty({ message:'手机号不能为空' })
    @IsNumber()
    readonly mobile: number;
    readonly role?: string | number;
}