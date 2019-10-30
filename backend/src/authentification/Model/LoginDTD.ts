import { ApiModelProperty } from "@nestjs/swagger";

export class LoginDTD{
    @ApiModelProperty({ type: String })
    email:string;
    @ApiModelProperty({ type: String })
    password:string;
}