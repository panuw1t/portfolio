package com.example.demo

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.CommandLineRunner
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.boot.SpringApplication
import org.springframework.web.bind.annotation.RequestParam



@SpringBootApplication
class DemoApplication

fun main(args: Array<String>) {
	runApplication<DemoApplication>(*args)
}

@RestController
class BootController {
	@Autowired
	private val jdbcTemplate: JdbcTemplate? = null

	@GetMapping("/")
	fun hello() = "hello world "

	@GetMapping("/hello")
	fun pals() = "hello pals"

	@GetMapping("/query")
	fun query(@RequestParam id: Int): String? {
		val sql = "SELECT info  FROM sample WHERE id = $id"
		return jdbcTemplate?.queryForObject(sql, String::class.java)
	}
}

data class Sample(val info: String)