package com.github.yildizmy;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.env.Environment;
import java.net.InetAddress;
import java.net.UnknownHostException;

@Slf4j
@SpringBootApplication
public class EWalletApplication {

	public static void main(String[] args) {
		SpringApplication.run(EWalletApplication.class, args);
	}
}
