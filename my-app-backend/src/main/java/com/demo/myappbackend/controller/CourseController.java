package com.demo.myappbackend.controller;

import com.demo.myappbackend.entity.CourseEntity;
import com.demo.myappbackend.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class CourseController {

    @Autowired
    CourseRepository courseRepository;

    @GetMapping("/courses")
    public List<CourseEntity> getAllCourses(){
        return courseRepository.findAll();
    }

    @PostMapping(value = "/course", consumes = "application/json")
    public void addCourse(@RequestBody CourseEntity courseEntity) {
        courseRepository.save(courseEntity);
    }

    @PutMapping(value = "/course", consumes = "application/json")
    public void updateCourse(@RequestBody CourseEntity courseEntity) {
        courseRepository.save(courseEntity);
    }

    @DeleteMapping("/course/{courseid}")
    public void deleteCourse(@PathVariable("courseid") Long courseId) {
        courseRepository.deleteById(courseId);
    }
}
