package sun.sunstaffmanagement.service;

import org.springframework.stereotype.Service;
import sun.sunstaffmanagement.models.Employee;

import java.util.List;

public interface EmployeeService {
    Employee createEmployee(Employee employee);

    List<Employee> getAllEmployee();
}
