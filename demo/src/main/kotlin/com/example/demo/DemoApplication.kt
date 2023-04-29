package com.example.demo

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.CommandLineRunner
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.boot.SpringApplication;


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
	fun query(): List<Sample> {
		val sql = "SELECT *  FROM sample"
		return jdbcTemplate!!.query(sql) { rs, rowNum ->
			Sample(rs.getInt("id"), rs.getInt("sample"), rs.getString("method"), rs.getString("info"))
		}
	}
}

data class Sample(val id: Int, val sample: Int, val method: String, val info: String)