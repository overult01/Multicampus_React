package edu.multi.boot1;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ReactController {
//@ResponseBody 선언 없어도 된다.

	@CrossOrigin(origins = "*")
	@RequestMapping("/helloreact")
	public MemberDTO helloreact() {
		System.out.println("리액트로부터 요청받았습니다");
		MemberDTO dto  = new MemberDTO("리액트","리액트1234");
		return dto;
	}
	
	@CrossOrigin(origins = "*")
	@GetMapping("/helloreactparam")
	public MemberDTO helloreactparam(String id, int password ) {
		System.out.println("리액트로부터 요청받았습니다(파라미터 있는 경우)");
		MemberDTO dto  = new MemberDTO(id, "암호="+password);
		return dto;
	}
	
	@CrossOrigin(origins = "*")
	@PostMapping("/helloreactparampost")
	//리액트 {   id:"post전송" , password : 1234    }  전송 - 
	//@RequestBody json-->자바 객체타입 변환
	//@ResponseBody 자바 객체타입 -->json 변환
	public MemberDTO helloreactparampost(@RequestBody MemberDTO dto ) {
		System.out.println("리액트로부터 요청받았습니다(post 방식일 때 파라미터 있는 경우)");
		MemberDTO resultdto  = new MemberDTO(dto.getId(), "암호="+dto.getPassword() );
		return resultdto;
	}
	
	@CrossOrigin(origins = "*")
	@GetMapping("/userlist")
	public ArrayList<MemberDTO> helloreactparam() {
		ArrayList<MemberDTO> list = new ArrayList<MemberDTO>();
		for(int i = 1 ; i <= 5; i++) {
			MemberDTO dto = new MemberDTO("아이디"+i , "암호"+i);//, "name"+i, "phone"+i, "email"+i, "address"+i);
			list.add(dto);
		}
		return list;
	}
	
	
	
}






